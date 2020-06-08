const router = require('express').Router();
const {wrapAsync} = require('../../util/util');

const {
    checkout,
    getOrders
} = require('../controllers/order_controller');

router.route('/order/checkout')
    .post(wrapAsync(checkout));

// only for load test (Not in API Docs)
router.route('/orders')
    .get(wrapAsync(getOrders));

module.exports = router;