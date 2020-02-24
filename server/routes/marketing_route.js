const router = require('express').Router();

const {
    getCampaigns,
    getHots
} = require('../controllers/marketing_controller');

router.route('/marketing/campaigns')
    .get(getCampaigns)

router.route('/marketing/hots')
    .get(getHots)

module.exports = router;