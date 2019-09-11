import userService from "../services/userService";


async function signUp(req, res) {
    const {login, email, password} = req.body;
    if (login && email && password) {
        const newUser = await userService.signUp({login, email, password});
        if (newUser) {
            return res.status(201).send({
                success: true,
                message: 'User successfully created',
                newUser
            })
        }
        return res.status(500).send({msg: 'Cannot create new user!'});
    }
    return res.status(400).send({msg: 'Missing fields'});
}

async function login (req, res) {
    const {login, password} = req.body;

    if (login && password) {
        const token = await userService.login({login, password});
        if (token) {
             return res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        }
        return res.status(403).json({
            success: false,
            message: 'Incorrect username or password'
        });
    }
    return res.status(400).json({
        success: false,
        message: 'Authentication failed! Please check the request'
    });

}
function index (req, res) {
    return res.json({
        success: true,
        message: 'Index page'
    });
}

export default {
    signUp,
    login,
    index
}
