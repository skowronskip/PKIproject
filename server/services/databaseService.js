import db from '../models/index.js';

async function showTables() {
    try {
        return db.sequelize.query('SELECT * FROM pg_catalog.pg_tables WHERE schemaname != \'pg_catalog\' AND schemaname != \'information_schema\';')
    } catch (e) {
        console.log(e);
    }
}


export default {
    showTables
}
