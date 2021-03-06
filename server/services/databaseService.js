import db from '../models/index.js';

async function showTables() {
    try {
        const tables = await db.sequelize.query('SELECT * FROM pg_catalog.pg_tables WHERE schemaname != \'pg_catalog\' AND schemaname != \'information_schema\';');
        return tables[0].map((table) => table.tablename).filter((name) => name !== 'SequelizeMeta' && name !== 'Users');
    } catch (e) {
        console.log(e);
    }
}

async function getQuery(query) {
    try {
        return await db.sequelize.query(query);
    } catch (e) {
        return {error: e.message}
    }
}


export default {
    showTables,
    getQuery
}
