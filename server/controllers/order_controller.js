require('dotenv').config();
const {TAPPAY_PARTNER_KEY} = process.env;
const User = require('../models/user_model');
const Order = require('../models/order_model');

const checkout = async (req, res) => {
    const data = req.body;
	if (!data.order || !data.order.total || !data.order.list || !data.prime) {
        res.status(400).send({error:'Create Order Error: Wrong Data Format'});
		return;
	}
    const token = req.get('Authorization');
    const accessToken = token ? token.replace('Bearer ', '') : token;

    const result = await User.getUserProfile(accessToken);
    const user = result.data;

    const now = new Date();
    const number = '' + now.getMonth() + now.getDate() + (now.getTime()%(24*60*60*1000)) + Math.floor(Math.random()*10);
    const orderRecord = {
        number: number,
        time: now.getTime(),
        status: -1, // -1 for init (not pay yet)
        details: JSON.stringify(data.order)
    };
    orderRecord.user_id = (user && user.id) ? user.id : null;
    const orderId = await Order.createOrder(orderRecord);
    let paymentResult;
    try {
        paymentResult = await Order.payOrderByPrime(TAPPAY_PARTNER_KEY, data.prime, data.order);
    } catch (error) {
        res.status(400).send({error});
        return;
    }
    const payment = {
        order_id: orderId,
        details: JSON.stringify(paymentResult)
    };
    await Order.createPayment(payment);
    res.send({data: {number}});
};

module.exports = {
    checkout
};