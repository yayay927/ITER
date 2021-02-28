require('dotenv').config();
const crypto = require('crypto');
const fs = require('fs');
const multer = require('multer');
const path = require('path');
const port = process.env.PORT;
const User = require('../server/models/user_model');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            const productId = req.body.product_id;
            const imagePath = path.join(__dirname, `../public/assets/${productId}`);
            if (!fs.existsSync(imagePath)) {
                fs.mkdirSync(imagePath);
            }
            cb(null, imagePath);
        },
        filename: (req, file, cb) => {
            const customFileName = crypto.randomBytes(18).toString('hex').substr(0, 8);
            const fileExtension = file.mimetype.split('/')[1]; // get file extension from original file name
            cb(null, customFileName + '.' + fileExtension);
        }
    })
});

const getImagePath = (protocol, hostname, productId) => {
    if (protocol == 'http') {
        return protocol + '://' + hostname + ':' + port + '/assets/' + productId + '/';
    } else {
        return protocol + '://' + hostname + '/assets/' + productId + '/';
    }
};

// reference: https://thecodebarbarian.com/80-20-guide-to-express-error-handling
const wrapAsync = (fn) => {
    return function(req, res, next) {
        // Make sure to `.catch()` any errors and pass them along to the `next()`
        // middleware in the chain, in this case the error handler.
        fn(req, res, next).catch(next);
    };
};

const USER_ROLE = {
    ADMIN: 1,
    USER: 2
}
const authentication = (roleId) => {
    return async function (req, res, next) {
        let accessToken = req.get('Authorization');
        console.log(accessToken);
        if (accessToken) {
            accessToken = accessToken.replace('Bearer ', '');
        } else {
            res.status(401).send({error: 'Unauthorized'});
            return;
        }

        // parse token;
        const user = {
            "id": 10044,
            "provider": "native",
            "name": "arthur",
            "email": "arthur@gmail.com",
            "picture": "aaa"
        }
        req.user = user;
        console.log(roleId);
        if (!roleId) {
            next();
        } else {
            const userWithRole = await User.getUserWithRole(user.id, roleId);
            console.log(userWithRole);
            if (!userWithRole) {
                res.status(403).send({error: 'Forbidden'});    
            } else {
                next();
            }

        }
    }
}

module.exports = {
    upload,
    getImagePath,
    wrapAsync,
    USER_ROLE,
    authentication
};
