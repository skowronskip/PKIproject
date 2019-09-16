import model from '../models';

const {Team} = model;

async function createTeam({name, leagueId}) {
    try {
        return Team.create({name, leagueId});
    } catch (e) {
        return null;
    }
}

async function updateTeam({id, name, leagueId}) {
    try {
        const team = await Team.findByPk(id);
        if (team) {
            return team.update({name, leagueId});
        }
    } catch (e) {
        return null;
    }
}

async function getAllTeams() {
    try {
        return Team.findAll();
    } catch (e) {
        return null;
    }
}

async function deleteTeam(id) {
    try {
        const team = await Team.findByPk(id);
        if (team) {
            return team.destroy();
        }
    } catch (e) {
        return null;
    }
}


export default {
    createTeam,
    getAllTeams,
    updateTeam,
    deleteTeam
}
