const db = require('../config/db/connect');
const util = require('node:util');
const query = util.promisify(db.query).bind(db);

class AuthUser {
    constructor () {}

    async getAll() {
        const sql = `
            SELECT *
            FROM view_authuser;`;
        return await query(sql);
    }
}

module.exports = new AuthUser();