require('dotenv').config();
const mysql = require("mysql");
const {promisify} = require('util'); // util from native nodejs library
const env = process.env.NODE_ENV || 'production';
const multipleStatements = (process.env.NODE_ENV === 'test');

const mysqlConfig = {
    production: { // for EC2 machine
        host: "localhost",
        user: "root",
        password: "123456",
        database: "stylish"
    },
    development: { // for localhost development
        host: "localhost",
        user: "arthurlin",
        password: "1234",
        database: "stylish_backend"    
    },
    test: { // for automation testing (command: npm run test)
        host: "localhost",
        user: "arthurlin",
        password: "1234",
        database: "stylish_test"   
    }
}

const mysqlCon = mysql.createConnection(mysqlConfig[env], {multipleStatements});

const promiseQuery = (query, bindings) => {
    return promisify(mysqlCon.query).bind(mysqlCon)(query, bindings);
};

const promiseTransaction = () => {
    return promisify(mysqlCon.beginTransaction).bind(mysqlCon);
}

const promiseCommit = () => {
    return promisify(mysqlCon.commit).bind(mysqlCon);
}

const promiseRollback = () => {
    return promisify(mysqlCon.rollback).bind(mysqlCon);
}

const promiseEnd = () => {
    return promisify(mysqlCon.end).bind(mysqlCon);
}

module.exports={
	core: mysql,
    query: promiseQuery,
    transaction: promiseTransaction,
    commit: promiseCommit,
    rollback: promiseRollback,
    end: promiseEnd,
};