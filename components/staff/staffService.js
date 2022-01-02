const config = require('../../config/dbconfig');
const sql = require('mssql');

const queryAll = async (table) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`SELECT * FROM ${table}`);
    return res.recordset;
}

const queryRange = async (func, from, to) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`EXEC ${func} ${from}, ${to}`);
    return res.recordset;
}

const countAll = async (table) => {
    const pool = await sql.connect(config);
    const res = await pool.request().query(`SELECT COUNT(*) AS count FROM ${table}`);
    return res.recordset;
}

module.exports = {
    queryAll,
    queryRange,
    countAll
}