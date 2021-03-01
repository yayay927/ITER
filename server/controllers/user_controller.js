require('dotenv').config();
const validator = require('validator');
const User = require('../models/user_model');
const jwt = require('jsonwebtoken');
const {TOKEN_SECRET} = process.env; // 30 days by seconds

const signUp = async (req, res) => {
    let {name} = req.body;
    const {email, password} = req.body;

    if(!name || !email || !password) {
        res.status(400).send({error:'Request Error: name, email and password are required.'});
        return;
    }

    if (!validator.isEmail(email)) {
        res.status(400).send({error:'Request Error: Invalid email format'});
        return;
    }

    name = validator.escape(name);

    const result = await User.signUp(name, email, password);
    if (result.error) {
        res.status(403).send({error: result.error});
        return;
    }

    const user = result.user;
    if (!user) {
        res.status(500).send({error: 'Database Query Error'});
        return;
    }

    res.status(200).send({
        data: {
            access_token: user.access_token,
            access_expired: user.access_expired,
            login_at: user.login_at,
            user: {
                id: user.id,
                provider: user.provider,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        }
    });
};

const nativeSignIn = async (email, password) => {
    if(!email || !password){
        return {error: 'Request Error: email and password are required.', status: 400};
    }

    try {
        return await User.nativeSignIn(email, password);
    } catch (error) {
        return {error};
    }
};

const facebookSignIn = async (accessToken) => {
    if (!accessToken) {
        return {error: 'Request Error: access token is required.', status: 400};
    }

    try {
        const profile = await User.getFacebookProfile(accessToken);
        const {id, name, email} = profile;

        if(!id || !name || !email){
            return {error: 'Permissions Error: facebook access token can not get user id, name or email'};
        }

        return await User.facebookSignIn(id, name, email);
    } catch (error) {
        return {error: error};
    }
};

const signIn = async (req, res) => {
    const data = req.body;

    let result;
    switch (data.provider) {
        case 'native':
            result = await nativeSignIn(data.email, data.password);
            break;
        case 'facebook':
            result = await facebookSignIn(data.access_token);
            break;
        default:
            result = {error: 'Wrong Request'};
    }

    if (result.error) {
        const status_code = result.status ? result.status : 403;
        res.status(status_code).send({error: result.error});
        return;
    }

    const user = result.user;
    if (!user) {
        res.status(500).send({error: 'Database Query Error'});
        return;
    }

    res.status(200).send({
        data: {
            access_token: user.access_token,
            access_expired: user.access_expired,
            login_at: user.login_at,
            user: {
                id: user.id,
                provider: user.provider,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        }
    });
};

const getUserProfile = async (req, res) => {
    let accessToken = req.get('Authorization');
	if (accessToken) {
		accessToken = accessToken.replace('Bearer ', '');
	} else {
		res.status(400).send({error: "Wrong Request: authorization is required."});
		return;
    }

    try {
        const user = jwt.verify(accessToken, TOKEN_SECRET);
        res.status(200).send({
            data: {
                provider: user.provider,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        });
        return;
    } catch(err) {
        res.status(403).send({error: "Invalid Access Token"});
        return;
    }
};

module.exports = {
    signUp,
    signIn,
    getUserProfile
};
