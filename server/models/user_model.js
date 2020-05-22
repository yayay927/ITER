require('dotenv').config();
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const got = require('got');
const {query, transaction, commit, rollback} = require('../../util/mysqlcon.js');
const salt = parseInt(process.env.BCRYPT_SALT);

const signUp = async (name, email, password, expire) => {
    try {
        await transaction();

        const emails = await query('SELECT email FROM user WHERE email = ? FOR UPDATE', [email]);
        if (emails.length > 0){
            await commit();
            return {error: 'Email Already Exists'};
        }

        const loginAt = new Date();
        const sha = crypto.createHash('sha256');
        sha.update(email + password + loginAt);
        const accessToken = sha.digest('hex');
        const user = {
            provider: 'native',
            email: email,
            password: bcrypt.hashSync(password, salt),
            name: name,
            picture: null,
            access_token: accessToken,
            access_expired: expire,
            login_at: loginAt
        };
        const queryStr = 'INSERT INTO user SET ?';

        const result = await query(queryStr, user);
        user.id = result.insertId;

        await commit();
        return {accessToken, loginAt, user};
    } catch (error) {
        await rollback();
        return {error};
    }
};

const nativeSignIn = async (email, password, expire) => {
    try {
        await transaction();

        const users = await query('SELECT * FROM user WHERE email = ?', [email]);
        const user = users[0];

        if (!bcrypt.compareSync(password, user.password)){
            await commit();
            return {error: 'Password is wrong'};
        }

        const loginAt = new Date();
        const sha = crypto.createHash('sha256');
        sha.update(email + password + loginAt);
        const accessToken = sha.digest('hex');

        const queryStr = 'UPDATE user SET access_token = ?, access_expired = ?, login_at = ? WHERE id = ?';
        await query(queryStr, [accessToken, expire, loginAt, user.id]);

        await commit();

        return {accessToken, loginAt, user};
    } catch (error) {
        await rollback();
        return {error};
    }
};

const facebookSignIn = async (id, name, email, accessToken, expire) => {
    try {
        await transaction();

        const loginAt = new Date();
        let user = {
            provider: 'facebook',
            email: email,
            name: name,
            picture:'https://graph.facebook.com/' + id + '/picture?type=large',
            access_token: accessToken,
            access_expired: expire,
            login_at: loginAt
        };

        const users = await query('SELECT id FROM user WHERE email = ? AND provider = \'facebook\' FOR UPDATE', [email]);
        let userId;
        if (users.length === 0) { // Insert new user
            const queryStr = 'insert into user set ?';
            const result = await query(queryStr, user);
            userId = result.insertId;
        } else { // Update existed user
            userId = users[0].id;
            const queryStr = 'UPDATE user SET access_token = ?, access_expired = ?, login_at = ?  WHERE id = ?';
            await query(queryStr, [accessToken, expire, loginAt, userId]);
        }
        user.id = userId;

        await commit();

        return {accessToken, loginAt, user};
    } catch (error) {
        await rollback();
        return {error};
    }
};

const getUserProfile = async (accessToken) => {
    const results = await query('SELECT * FROM user WHERE access_token = ?', [accessToken]);
    if (results.length === 0) {
        return {error: 'Invalid Access Token'};
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
};

const getFacebookProfile = async function(accessToken){
    try {
        let res = await got('https://graph.facebook.com/me?fields=id,name,email&access_token=' + accessToken, {
            responseType: 'json'
        });
        return res.body;
    } catch (e) {
        console.log(e);
        throw('Permissions Error: facebook access token is wrong');
    }
};

module.exports = {
    signUp,
    nativeSignIn,
    facebookSignIn,
    getUserProfile,
    getFacebookProfile,
};