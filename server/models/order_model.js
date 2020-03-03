const {query, transaction, commit, rollback} = require('../../util/mysqlcon.js');
const request = require('request');

const createOrder = async (order) => {
    const result = await query('insert into order_table set ?', order);
    return result.insertId;
};

const createPayment = async function(payment){
    try {
        await transaction();
        await query('insert into payment set ?', payment);
        await query('update order_table set status = ?', [0]);
        await commit();
        return true;
    } catch (error) {
        await rollback();
        return {error};
    }
};

const payOrderByPrime = function(tappayKey, prime, order){
    return new Promise((resolve, reject) => {
        request({
            url:'https://sandbox.tappaysdk.com/tpc/payment/pay-by-prime',
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'x-api-key': tappayKey
            },
            json:{
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
            }
        }, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
};

module.exports = {
    createOrder,
    createPayment,
    payOrderByPrime
};