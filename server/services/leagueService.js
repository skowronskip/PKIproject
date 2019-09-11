import model from '../models';

const {League} = model;

async function createLeague({name, country}) {
    try {
        return League.create({name, country});
    } catch (e) {
        return null;
    }
}

async function updateLeague({id, name, country}) {
    try {
        const league = await League.findByPk(id);
        if (league) {
            return league.update({name, country});
        }
    } catch (e) {
        return null;
    }
}

async function getAllLeagues() {
    try {
        return League.findAll();
    } catch (e) {
        console.log(e);
        return null;
    }
}

async function deleteLeague(id) {
    try {
        const league = await League.findByPk(id);
        if (league) {
            return league.destroy();
        }
    } catch (e) {
        console.log(e);
        return null;
    }
}


export default {
    createLeague,
    getAllLeagues,
    updateLeague,
    deleteLeague
}
