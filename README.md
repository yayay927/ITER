# Stylish Web

### Deployment

1. Install packages: ```npm install```
2. Start MySQL server
3. Import database:
    1. ```mysql -u <user_name> -p <stylish_db_name> < stylish_backend.sql```
    2. ```mysql -u <user_name> -p <stylish_test_db_name> < stylish_test.sql``` (Optional)
4. Modidy the `API_HOST` in config: ```./public/js/config.js``` for front-end
5. Create config: ```./.env``` (template: ```.env-templage```) for backend
    1. set `HOST`, `USERNAME`, `PASSWORD`, `DATABASE` for MySQL server (`DATABASE_TEST` is Optional)
    2. set `NODE_ENV` to `development` for development
    3. set `TAPPAY_PARTNER_KEY` for cash flow
    4. set `AUTHENTICATION_CODE` for creating products & campaigns (look at `product_controller.js` and `marketing_controller.js`)
    5. set `BCRYPT_SALT` for password encryption (Optional)
6. Start a redis server in `localhost` at port `6379` (Optional)