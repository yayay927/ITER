const {
    users,
    products,
    variants,
    hots,
    hot_products,
    campaigns,
} = require('./fake_data');
const {transaction, commit, query, end} = require("../util/mysqlcon.js");

function createFakeUser() {
    return query(`INSERT INTO user (provider, email, password, name, picture, access_token, access_expired, login_at) VALUES ?`, [users.map(x => Object.values(x))]);
}

function createFakeProduct() {
    return query(`INSERT INTO product (category, title, description, price, texture, wash, place, note, story, main_image, images) VALUES ?`, [products.map(x => Object.values(x))]);
}

function createFakeVariant() {
    return query(`INSERT INTO variant (color_code, color_name, size, stock, product_id) VALUES ?`, [variants.map(x => Object.values(x))]);
}

async function createFakeHot() {
    await transaction();
    await query(`INSERT INTO hot (title) VALUES ?`, [hots.map(x => Object.values(x))]);
    await query(`INSERT INTO hot_product (hot_id, product_id) VALUES ?`, [hot_products.map(x => Object.values(x))]);
    await commit();
    return Promise.resolve();
}

function createFakeCampaign() {
    return query("INSERT INTO campaign (product_id, picture, story) VALUES ?", [campaigns.map(x => Object.values(x))]);

}

function createFakeData() {
    return createFakeProduct()
        .then(() => {return createFakeUser()})
        .then(() => {return createFakeVariant()})
        .then(() => {return createFakeHot()})
        .then(() => {return createFakeCampaign()})
        .catch(console.log)
}

function truncateFakeData() {
    console.log("truncate fake data")
    const setForeignKey = (status) => {
        return query("SET FOREIGN_KEY_CHECKS = ?", status);
    }

    const truncateTable = (table) => {
        return query(`TRUNCATE TABLE ${table}`);
    }

    return setForeignKey(0)
        .then(() => {return truncateTable('user')})
        .then(() => {return truncateTable('product')})
        .then(() => {return truncateTable('variant')})
        .then(() => {return truncateTable('hot')})
        .then(() => {return truncateTable('hot_product')})
        .then(() => {return truncateTable('campaign')})
        .then(() => {return truncateTable('order_table')})
        .then(() => {return truncateTable('payment')})
        .then(() => {return setForeignKey(1)})
        .catch(console.log)
}

function closeConnection() {
    return end();
}

// execute when called directly.
if (require.main === module) {
    console.log("main")
    truncateFakeData()
        .then(() => {return createFakeData()})
        .then(() => {return closeConnection()})
}

module.exports = {
    createFakeData,
    truncateFakeData,
    closeConnection,
}