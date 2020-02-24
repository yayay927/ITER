const {truncateFakeData, closeConnection} = require('./fake_data_generator');
const {requester} = require('./set_up');

after(async () => {
    // await truncateFakeData();
    await closeConnection();
    requester.close();
});