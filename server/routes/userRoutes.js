import userController from "../controllers/userController";
import authentication from "../auhentication/authentication";

export default (app) => {
    app.post('/api/users', userController.signUp);
    app.post('/api/login', userController.login);
    app.get('/test', authentication.checkToken, userController.index);
}
