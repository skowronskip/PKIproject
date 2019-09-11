import leagueService from "../services/leagueService";

async function createLeague(req, res) {
    const {name, country} = req.body;
    if (name && country) {
        const newLeague = await leagueService.createLeague({name, country});
        if (newLeague) {
            return res.status(201).send({
                success: true,
                message: 'League successfully created',
                newLeague
            })
        }
        return res.status(500).send({msg: 'Cannot create new league!'});
    }
    return res.status(400).send({msg: 'Missing fields'});
}

async function updateLeague(req, res) {
    const {id, name, country} = req.body;
    if (id && name && country) {
        const updatedLeague = await leagueService.updateLeague({id, name, country});
        if (updatedLeague) {
            return res.status(201).send({
                success: true,
                message: 'League successfully updated',
                updatedLeague
            })
        }
        return res.status(500).send({msg: 'Cannot update league!'});
    }
    return res.status(400).send({msg: 'Missing fields'});
}

async function deleteLeague(req, res) {
    const {id} = req.body;
    if (id) {
        const deletedLeague = await leagueService.deleteLeague(id);
        if (deletedLeague) {
            return res.status(201).send({
                success: true,
                message: 'League successfully updated',
                deletedLeague
            })
        }
        return res.status(500).send({msg: 'Cannot delete user!'});
    }
    return res.status(400).send({msg: 'Missing fields'});
}

async function allLeagues(req, res) {
    const allLeagues = await leagueService.getAllLeagues();
    if (allLeagues) {
        return res.status(200).json(allLeagues);
    }
    return res.status(500).json({msg: 'Error while querying database'});
}

export default {
    createLeague,
    updateLeague,
    deleteLeague,
    allLeagues
}
