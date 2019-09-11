import userController from "../controllers/userController";

export default (app) => {
    app.post('/api/users', userController.signUp);
}
