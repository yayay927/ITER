require('dotenv').config();
const mysql = require('mysql');
const {promisify} = require('util'); // util from native nodejs library
const env = process.env.NODE_ENV || 'production';
const multipleStatements = (process.env.NODE_ENV === 'test');
const {HOST, USERNAME, PASSWORD, DATABASE, DATABASE_TEST} = process.env;

const mysqlConfig = {
    production: { // for EC2 machine
        host: HOST,
        user: USERNAME,
        password: PASSWORD,
        database: DATABASE
    },
    development: { // for localhost development
        host: HOST,
        user: USERNAME,
        password: PASSWORD,
        database: DATABASE
    },
    test: { // for automation testing (command: npm run test)
        host: HOST,
        user: USERNAME,
        password: PASSWORD,
        database: DATABASE_TEST
    }
};

const mysqlCon = mysql.createConnection(mysqlConfig[env], {multipleStatements});

const promiseQuery = (query, bindings) => {
    return promisify(mysqlCon.query).bind(mysqlCon)(query, bindings);
};

const promiseTransaction = promisify(mysqlCon.beginTransaction).bind(mysqlCon);
const promiseCommit = promisify(mysqlCon.commit).bind(mysqlCon);
const promiseRollback = promisify(mysqlCon.rollback).bind(mysqlCon);
const promiseEnd = promisify(mysqlCon.end).bind(mysqlCon);

module.exports={
	core: mysql,
    query: promiseQuery,
    transaction: promiseTransaction,
    commit: promiseCommit,
    rollback: promiseRollback,
    end: promiseEnd,
};