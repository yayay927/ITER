require('dotenv').config();
const {query, end} = require('../util/mysqlcon.js');
const ORDER_QUANTITY = 1000;

function _createFakeOrder(orders) {
    return query('INSERT INTO order_table (number, time, status, details, user_id) VALUES ?', [orders.map(x => Object.values(x))]);
}

function createFakeData() {
    let orders = [];
    for (let i = 0; i < ORDER_QUANTITY; i++) {
        let order = {
            number: i,
            time: Date.now(),
            status: 0,
            details: JSON.stringify({
                total: Math.floor(Math.random() * 1000)
            }),
            user_id: 1 + Math.floor(Math.random() * 5)
        };
        orders.push(order);
    }
    console.log(orders);
    return _createFakeOrder(orders)
        .catch(console.log);
}

function truncateFakeData() {
    console.log('truncate fake data');
    const setForeignKey = (status) => {
        return query('SET FOREIGN_KEY_CHECKS = ?', status);
    };

    const truncateTable = (table) => {
        return query(`TRUNCATE TABLE ${table}`);
    };

    return setForeignKey(0)
        .then(truncateTable('order_table'))
        .catch(console.log);
}

function closeConnection() {
    return end();
}

// execute when called directly.
if (require.main === module) {
    console.log('main');
    truncateFakeData()
            .then(createFakeData)
        .then(closeConnection);
}

module.exports = {
    createFakeData,
    truncateFakeData,
    closeConnection,
};