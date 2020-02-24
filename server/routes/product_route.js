const router = require('express').Router();

const {
    getProducts,
} = require('../controllers/product_controller');

router.route('/products/:category')
    .get(getProducts);

module.exports = router;
