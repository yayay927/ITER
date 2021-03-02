require('dotenv');
const {assert, requester} = require('./set_up');
const {AUTHENTICATION_CODE} = process.env;
const {PORT} = process.env;
const {query} = require('../server/models/mysqlcon');
const sinon = require('sinon');

const {users} = require('./fake_data');
const user1 = {
    provider: users[0].provider,
    email: users[0].email,
    password: users[0].password
};
let accessToken1;
let userId1;

const user2 = {
    provider: users[2].provider,
    email: users[2].email,
    password: users[2].password
};
let accessToken2;
let userId2;

let stub1;
let stub2;

describe('marketing', () => {

    before(async () => {
        const cache = require('../util/cache');

        // let cache do nothing
        stub1 = sinon.stub(cache, 'get').callsFake(() => {});
        stub2 = sinon.stub(cache, 'set').callsFake(() => {});
        stub2 = sinon.stub(cache, 'del').callsFake(() => {});

        const res1 = await requester
            .post('/api/1.0/user/signin')
            .send(user1);
        const data1 = res1.body.data;
        userId1 = data1.user.id;
        accessToken1 = data1.access_token;

        const res2 = await requester
            .post('/api/1.0/user/signin')
            .send(user2);
        const data2 = res2.body.data;
        userId2 = data2.user.id;
        accessToken2 = data2.access_token;
    });

    it('get campaign data', async () => {
        const res = await requester
            .get('/api/1.0/marketing/campaigns');

        const data = res.body.data;
        const expect =  [
            {
                'id': 1,
                'product_id': 1,
                'picture': `http://127.0.0.1:${PORT}/assets/1/keyvisual.jpg`,
                'story': '測試1'
            },
            {
                'id': 2,
                'product_id': 2,
                'picture': `http://127.0.0.1:${PORT}/assets/2/keyvisual.jpg`,
                'story': '測試2'
            },
            {
                'id': 3,
                'product_id': 3,
                'picture': `http://127.0.0.1:${PORT}/assets/3/keyvisual.jpg`,
                'story': '測試3'
            }
        ];
        assert.deepEqual(data, expect);
    });

    it('get hot data', async () => {
        const res = await requester
            .get('/api/1.0/marketing/hots');

        const data = res.body.data;
        assert.equal(data.length, 2);

        const hot1 = data[0];
        assert.equal(hot1.title, 'hot1');
        assert.equal(hot1.products.length, 3);

        const product1 = hot1.products[0];
        const expect = {
            id: 1,
            category: 'men',
            title: 'product1',
            description: 'Product 1',
            price: 100,
            texture: 'pt1',
            wash: 'pw1',
            place: 'pp1',
            note: 'pn1',
            story: 'ps1',
            colors: [ { code: 'FFFFFF', name: '白色' }, { code: 'DDFFBB', name: '亮綠' } ],
            sizes: [ 'S', 'M' ],
            variants: [
                { color_code: 'FFFFFF', size: 'S', stock: 2 },
                { color_code: 'FFFFFF', size: 'M', stock: 5 },
                { color_code: 'DDFFBB', size: 'S', stock: 2 }
            ],
            main_image: `http://127.0.0.1:${PORT}/assets/1/main.jpg`,
            images: [
                `http://127.0.0.1:${PORT}/assets/1/0.jpg`,
                `http://127.0.0.1:${PORT}/assets/1/1.jpg`,
                `http://127.0.0.1:${PORT}/assets/1/0.jpg`,
                `http://127.0.0.1:${PORT}/assets/1/1.jpg`
            ]
        };
        assert.deepEqual(product1, expect);
    });

    it('create hot data', async () => {
        await requester
            .post('/api/1.0/admin/hot')
            .set('Authorization', `Bearer ${accessToken1}`)
            .send({
                title: 'new hots',
                product_ids: '1,2,3',
                authentication_code: AUTHENTICATION_CODE
            });

        const hots = await query('SELECT * FROM hot ORDER BY id DESC LIMIT 1');
        const products = await query('SELECT * FROM hot_product WHERE hot_id = ?', hots[0].id);
        assert.deepEqual(products.map(x => x.product_id), [1,2,3]);
    });

    it('create hot data without login', async () => {
        const res = await requester
            .post('/api/1.0/admin/hot')
            .send({
                title: 'new hots',
                product_ids: '1,2,3',
                authentication_code: AUTHENTICATION_CODE
            });
        assert.equal(res.statusCode, 401);
    });

    it('create hot data without admin role', async () => {
        const res = await requester
            .post('/api/1.0/admin/hot')
            .set('Authorization', `Bearer ${accessToken2}`)
            .send({
                title: 'new hots',
                product_ids: '1,2,3',
                authentication_code: AUTHENTICATION_CODE
            });

        assert.equal(res.statusCode, 403);
    });

    it('create campaign', async () => {
        await requester
            .post('/api/1.0/admin/hot')
            .set('Authorization', `Bearer ${accessToken1}`)
            .send({
                title: 'new hots',
                product_ids: '1,2,3',
                authentication_code: AUTHENTICATION_CODE
            });

        const hots = await query('SELECT * FROM hot ORDER BY id DESC LIMIT 1');
        const products = await query('SELECT * FROM hot_product WHERE hot_id = ?', hots[0].id);
        assert.deepEqual(products.map(x => x.product_id), [1,2,3]);
    });

    after(() => {
        stub1.restore();
        stub2.restore();
    });
});