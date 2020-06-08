const {query, transaction, commit, rollback} = require('../../util/mysqlcon.js');
const got = require('got');

const createOrder = async (order) => {
    const result = await query('INSERT INTO order_table SET ?', order);
    return result.insertId;
};

const createPayment = async function(payment){
    try {
        await transaction();
        await query('INSERT INTO payment SET ?', payment);
        await query('UPDATE order_table SET status = ?', [0]);
        await commit();
        return true;
    } catch (error) {
        await rollback();
        return {error};
    }
};

const payOrderByPrime = async function(tappayKey, prime, order){
    let res = await got.post('https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime', {
        headers: {
            'Content-Type':'application/json',
            'x-api-key': tappayKey
        },
        json: {
            'prime': prime,
            'partner_key': tappayKey,
            'merchant_id': 'AppWorksSchool_CTBC',
            'details': 'Stylish Payment',
            'amount': order.total,
            'cardholder': {
                'phone_number': order.recipient.phone,
                'name': order.recipient.name,
                'email': order.recipient.email
            },
            'remember': false
        },
        responseType: 'json'
    });
    return res.body;
};

const getOrders = async () => {
    const orders = await query('SELECT * FROM order_table');
    return orders;
};

module.exports = {
    createOrder,
    createPayment,
    payOrderByPrime,
    getOrders,
};