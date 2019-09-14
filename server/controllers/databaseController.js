import databaseService from "../services/databaseService";

async function showTable(req, res) {
    const tablesNames = await databaseService.showTables();
    if (tablesNames) {
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
