import databaseService from "../services/databaseService";

async function showTable(req, res) {
    const tables = await databaseService.showTables();
    if (tables) {
        const tablesNames = tables[0].map((table) => table.tablename).filter((name) => name !== 'SequelizeMeta');
        return res.status(201).send({
            success: true,
            tablesNames
        })
    }
    return res.status(500).send({msg: 'Cannot connect to database!'});
}

export default {
    showTable
}
