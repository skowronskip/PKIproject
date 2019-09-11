import authentication from "../auhentication/authentication";
import leagueController from "../controllers/leagueController";

export default (app) => {
    app.post('/api/leagues', authentication.checkToken, leagueController.createLeague);
    app.put('/api/leagues', authentication.checkToken, leagueController.updateLeague);
    app.delete('/api/leagues/:id', authentication.checkToken, leagueController.deleteLeague);
    app.get('/api/leagues/', authentication.checkToken, leagueController.allLeagues);
}
