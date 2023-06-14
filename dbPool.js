const mysql = require('mysql');

const pool  = mysql.createPool({
    connectionLimit: 10,
    host: "lcpbq9az4jklobvq.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "gnfgzzid9inrpez5",
    password: "u418rshfveix6k1g",
    database: "qo3892akxcremf7q"
});

module.exports = pool;
