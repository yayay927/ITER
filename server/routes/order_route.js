const router = require('express').Router();

const {
    checkout,
} = require('../controllers/order_controller');

router.route('/order/checkout')
    .post(checkout);

module.exports = router;