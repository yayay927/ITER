const {query, transaction, commit, rollback} = require("../../util/mysqlcon.js");
const crypto = require("crypto");
const request = require('request');

const signUp = async (name, email, password, expire) => {
    try {
        await transaction(); // TODO error handling

        const emails = await query("select email from user where email = ? for update", [email]);
        if (emails.length > 0){
            return {error: "Email Already Exists"}
        }

        const loginAt = new Date();
        const sha = crypto.createHash("sha256");
        sha.update(email + password + loginAt);
        const accessToken = sha.digest("hex");
        const user = {
            provider: "native",
            email: email,
            password: password,
            name: name,
            picture: null,
            access_token: accessToken,
            access_expired: expire,
            login_at: loginAt
        };
        const queryStr = "insert into user set ?";

        const result = await query(queryStr, user);
        user.id = result.insertId;

        await commit();
        return {accessToken, loginAt, user};
    } catch (error) {
        await rollback();
        return {error};
    }
}

const nativeSignIn = async (email, password, expire) => {
    try {
        await transaction();

        const users = await query("select * from user where email = ? and password = ?", [email, password]);
        if (users.length === 0){
            return {error: "Sign In Error"};
        }

        const user = users[0];
        const loginAt = new Date();
        const sha = crypto.createHash("sha256");
        sha.update(email + password + loginAt);
        const accessToken = sha.digest("hex");

        const queryStr = "update user set access_token = ?, access_expired = ?, login_at = ? where id = ?";
        await query(queryStr, [accessToken, expire, loginAt, user.id]);

        await commit();

        return {accessToken, loginAt, user};
    } catch (error) {
        await rollback();
        return {error};
    }
}

const facebookSignIn = async (id, name, email, accessToken, expire) => {
    try {
        await transaction();

        const loginAt = new Date();
        let user = {
            provider: "facebook",
            email: email,
            name: name,
            picture:"https://graph.facebook.com/" + id + "/picture?type=large",
            access_token: accessToken,
            access_expired: expire,
            login_at: loginAt
        };

        const users = await query("select id from user where email = ? and provider = 'facebook' for update", [email]);
        let userId;
        if (users.length === 0) { // Insert new user
            const queryStr = "insert into user set ?";
            const result = await query(queryStr, user);
            userId = result.insertId;
        } else { // Update existed user
            userId = users[0].id
            const queryStr = "update user set access_token = ?, access_expired = ?, login_at = ?  where id = ?";
            await query(queryStr, [accessToken, expire, loginAt, userId]);
        }
        user.id = userId;

        await commit();

        return {accessToken, loginAt, user};
    } catch (error) {
        await rollback();
        return {error};
    }
}

const getUserProfile = async (accessToken) => {
    const results = await query("select * from user where access_token = ?", [accessToken]);
    if (results.length === 0) {
        return {error: "Invalid Access Token"};
    } else {
        return {
            data:{
                id: results[0].id,
                provider: results[0].provider,
                name: results[0].name,
                email: results[0].email,
                picture: results[0].picture
            }
        };
    }
}


const getFacebookProfile = function(accessToken){
    return new Promise((resolve, reject) => {
        if (!accessToken) {
            resolve(null);
            return;
        }
        request.get(
            "https://graph.facebook.com/me?fields=id,name,email&access_token=" + accessToken, 
            function(error, response, body) {
                body = JSON.parse(body);
                if(body.error) {
                    reject(body.error);
                } else {
                    resolve(body);
                }
            }
        );
    });
};

module.exports = {
    signUp,
    nativeSignIn,
    facebookSignIn,
    getUserProfile,
    getFacebookProfile,
}