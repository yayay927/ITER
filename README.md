# Stylish Web

### Deployment

1. Start mysql server: ```sudo /sbin/service mysqld start```
2. Import database:
    1. ```mysql -u <user_name> -p <stylish_db_name> < stylish_backend.sql```
    2. ```mysql -u <user_name> -p <stylish_test_db_name> < stylish_test.sql```
3. Modidy Front-end config: ```./public/js/config.js```
4. Create backend config: ```./.env``` (Could see template file: ```.env-templage```)