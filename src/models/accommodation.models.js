const db = require('../config/db/connect');
const util = require('node:util');
const query = util.promisify(db.query).bind(db);

class Accommocodation {
    constructor () {}

    async getAll() {
        const sql = `
            SELECT *
            FROM accommodation;`;
        return await query(sql);
    }
}

module.exports = new Accommocodation();