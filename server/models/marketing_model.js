const {transaction, commit, rollback, query} = require("../../util/mysqlcon.js");

const createCampaign = async (campaign) => {
    const result = await query("insert into campaign set ?", campaign);
    return result.insertId;
};

const createHot = async (title, productIds) => {
    try {
        await transaction();
        const hot = await query("INSERT INTO hot SET ?", {title});
        const hotId = hot.insertId;
        const hotProductMapping = productIds.map(productId => [hotId, productId]);
        await query("insert into hot_product(hot_id, product_id) values ?", [hotProductMapping])
        await commit();
        return true
    } catch (e) {
        await rollback()
        return false
    }
}

const getCampaigns = async () => {
    return await query("SELECT * FROM campaign", []);
}

const getHots = async () => {
    return await query("SELECT * FROM hot", []);
}

module.exports = {
    createCampaign,
    createHot,
    getCampaigns,
    getHots
}