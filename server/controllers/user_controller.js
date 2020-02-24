const User = require("../models/user_model");
const expire = (30 * 24 * 60 * 60) // 30 days by seconds

const signUp = async (req, res) => {
    const {name, email, password} = req.body;
	if(!name || !email || !password) {
        // TODO: make error message a const;
		res.status(400).send({error:"Request Error: name, email and password are required."});
		return;
    }

    const result = await User.signUp(name, email, password, expire);

    if (result.error) {
        res.status(403).send({error: result.error});
        return;
    }

    const {accessToken, loginAt, user} = result;
    if (!user) {
        res.status(500).send({error: "Database Query Error"});
        return;
    }

    res.status(200).send({
        data: {
            access_token: accessToken,
            access_expired: expire,
            login_at: loginAt,
            user: {
                id: user.id,
                provider: user.provider,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        }
    });
}

const nativeSignIn = async (email, password) => {
    if(!email || !password){
        return {error: "Request Error: email and password are required."};
    }

    try {
        return await User.nativeSignIn(email, password, expire);
    } catch (error) {
        return {error};
    }
}

const facebookSignIn = async (accessToken) => {
    if (!accessToken) {
        return {error: "Request Error: access token is required."};
    }

    try {
        const profile = await User.getFacebookProfile(accessToken);
        const {id, name, email} = profile;

        if(!id || !name || !email){
            return {error: "Permissions Error: id, name, email are required."};
        }

        return await User.facebookSignIn(id, name, email, accessToken, expire);
    } catch (error) {
        return {error: error};
    }
}

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
        res.status(403).send({error: result.error});
        return;
    }

    const {accessToken, loginAt, user} = result;
    if (!user) {
        res.status(500).send({error: "Database Query Error"});
        return;
    }

    res.status(200).send({
        data: {
            access_token: accessToken,
            access_expired: expire,
            login_at: loginAt,
            user: {
                id: user.id,
                provider: user.provider,
                name: user.name,
                email: user.email,
                picture: user.picture
            }
        }
    });
}

const getUserProfile = async (req, res) => {
    let accessToken = req.get("Authorization");
	if (accessToken) {
		accessToken = accessToken.replace("Bearer ", "");
	} else {
		res.status(403).send({error: "Wrong Request: authorization is required."});
		return;
    }
    const profile = await User.getUserProfile(accessToken);
    if (profile.error) {
        res.status(403).send({error: profile.error});
        return;
    } else {
        res.status(200).send(profile);
    }
}

module.exports = {
    signUp,
    signIn,
    getUserProfile
}