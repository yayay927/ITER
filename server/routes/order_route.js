const router = require('express').Router();
const {wrapAsync} = require('../../util/util');

const {
    checkout,
    getUserPayments,
} = require('../controllers/order_controller');

router.route('/order/checkout')
    .post(wrapAsync(checkout));

// For load testing (Not in API Docs)
router.route('/order/payments')
    .get(wrapAsync(getUserPayments));

module.exports = router;