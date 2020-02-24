const _ = require('lodash');
const {getProductsWithDetail} = require('./product_controller');
const Marketing = require('../models/marketing_model');
const Product = require('../models/product_model');

const getCampaigns = async (req, res) => {
    // TODO: cache

    const campaigns = await Marketing.getCampaigns();
    campaigns.map(campaign => {
        return campaign.picture = `/assets/${campaign.product_id}/${campaign.picture}`
    })

    res.json({data: campaigns})
}

const getHots = async (req, res) => {
    // TODO: cache

    const hots = await Marketing.getHots();
    const hots_with_detail = await Promise.all(hots.map(async (hot) => {
        const products = await Product.getHotProducts(hot.id);
        const products_with_detail = await getProductsWithDetail(req.protocol, req.hostname, products);
        return {
            title: hot.title,
            products: products_with_detail
        }
    }));

    res.json({data: hots_with_detail});
}

const createCampaign = async (req, res) => {
    const body = req.body;
    const image = req.files.main_image[0].filename;
    const campaign = {
        product_id: parseInt(body.product_id),
        picture: image,
        story: body.story
    };
    console.log(campaign);
    try {    
        const campaignId = await Marketing.createCampaign(campaign);
        res.send({campaignId});
    } catch (error) {
        res.status(500).send({error});
    }
}

const createHot = async (req, res) => {
    try {
        const title = req.body.title;
        const productIds = req.body.product_ids.split(",");
    
        const result = await Marketing.createHot(title, productIds);

        res.status(200).send({status: "OK"})
    } catch (error) {
        res.status(500).send({error})
    }
}

module.exports = {
    createCampaign,
    createHot,
    getCampaigns,
    getHots
}