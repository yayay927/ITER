require('dotenv').config();
const {NODE_ENV, RATE_LIMIT_WINDOW, RATE_LIMIT_COUNT} = process.env;
const Cache = require('./cache');
const client = Cache.client;
const QUOTA = (NODE_ENV == 'test' ? 10000 : (RATE_LIMIT_COUNT || 10));
const WINDOW = (RATE_LIMIT_WINDOW || 1); // 1 seconds

const rateLimiter = (req, res, next) => {
    try {
        const token = req.ip;
        client
            .multi()
            .set([token, 0, 'EX', WINDOW, 'NX'])
            .incr(token)
            .exec((err, replies) => {
                if (err) {
                    return res.status(500).send('Internal Server Error');
                }
                const reqCount = replies[1];
                if (reqCount > QUOTA) {
                    return res.status(429).send(`Quota of ${QUOTA} per ${WINDOW}sec exceeded`);
                }
                return next();
            });
    } catch {
        return res.status(500).send('Internal Server Error');
    }
};

module.exports = { rateLimiter };