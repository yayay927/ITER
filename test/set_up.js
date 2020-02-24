const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const {truncateFakeData, createFakeData} = require('./fake_data_generator');

chai.use(chaiHttp);

const assert = chai.assert;
const requester = chai.request(app).keepOpen(); // non-login user

before(async () => {
    await truncateFakeData();
    await createFakeData();
});

module.exports = {
    assert,
    requester,
};