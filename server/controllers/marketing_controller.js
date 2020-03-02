const Cache = require('../../util/cache');
const {getProductsWithDetail} = require('./product_controller');
const Marketing = require('../models/marketing_model');
const Product = require('../models/product_model');
const CACHE_CAMPAIGN_KEY = "cacheCampaigns"
const CACHE_HOT_KEY = "cacheHots";

const getCampaigns = async (req, res) => {
    let cacheCampaigns;
    try {
        cacheCampaigns = await Cache.get(CACHE_CAMPAIGN_KEY);
    } catch (e) {
        console.error(`Get campaign cache error: ${e}`);
    }

    if (cacheCampaigns) {
        console.log("Get campaign from cache");
        res.json({data: JSON.parse(cacheCampaigns)})
        return 
    }

    const campaigns = await Marketing.getCampaigns();
    campaigns.map(campaign => {
        return campaign.picture = `/assets/${campaign.product_id}/${campaign.picture}`
    })

    try {
        await Cache.set(CACHE_CAMPAIGN_KEY, JSON.stringify(campaigns));
    } catch (e) {
        console.error(`Set campaign cache error: ${e}`);
    }

    res.json({data: campaigns})
}

const getHots = async (req, res) => {
    let cacheHots;
    try {
        cacheHots = await Cache.get(CACHE_HOT_KEY);
    } catch (e) {
        console.error(`Get hot cache error: ${e}`);
    }

    if (cacheHots) {
        console.log("Get hot from cache");
        res.json({data: JSON.parse(cacheHots)})
        return 
    }

    const hots = await Marketing.getHots();
    const hots_with_detail = await Promise.all(hots.map(async (hot) => {
        const products = await Product.getHotProducts(hot.id);
        const products_with_detail = await getProductsWithDetail(req.protocol, req.hostname, products);
        return {
            title: hot.title,
            products: products_with_detail
        }
    }));

    try {
        await Cache.set(CACHE_HOT_KEY, JSON.stringify(hots_with_detail));
    } catch (e) {
        console.error(`Set hot cache error: ${e}`);
    }

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
        await Cache.del(CACHE_CAMPAIGN_KEY);
        res.send({campaignId});
    } catch (error) {
        res.status(500).send({error});
    }
}

const createHot = async (req, res) => {
    try {
        const title = req.body.title;
        const productIds = req.body.product_ids.split(",");
    
        await Marketing.createHot(title, productIds);
        await Cache.del(CACHE_HOT_KEY);

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