const router = require('express').Router();
const {
    wrapAsync,
    authentication
} = require('../../util/util');

const {
    checkout,
    getUserPayments,
    getUserPaymentsGroupByDB,
} = require('../controllers/order_controller');

router.route('/order/checkout')
    .post(authentication(), wrapAsync(checkout));

// For load testing (Not in API Docs)
router.route('/order/payments')
    .get(wrapAsync(getUserPayments));

router.route('/order/payments2')
    .get(wrapAsync(getUserPaymentsGroupByDB));

module.exports = router;