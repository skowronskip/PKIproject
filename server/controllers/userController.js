import jwt from 'jsonwebtoken';
import model from '../models';
import config from "../config/config";

const {User} = model;

async function signUp(req, res) {
    const {login, email, password} = req.body;
    try {
        const newUser = await User.create({login, email, password});
        return res.status(201).send({
            success: true,
            message: 'User successfully created',
            newUser
        })
    } catch (e) {
        return res.status(500).send(e);
    }
}

async function login (req, res) {
    const {login, password} = req.body;

    if (login && password) {
        const user = await User.findOne({where: {login, password}});
        if (user) {
            let token = jwt.sign({login},
                config.secret,
                { expiresIn: '24h'
                }
            );
            res.json({
                success: true,
                message: 'Authentication successful!',
                token: token
            });
        } else {
            res.status(403).json({
                success: false,
                message: 'Incorrect username or password'
            });
        }
    } else {
        res.status(400).json({
            success: false,
            message: 'Authentication failed! Please check the request'
        });
    }
}
function index (req, res) {
    res.json({
        success: true,
        message: 'Index page'
    });
}

export default {
    signUp,
    login,
    index
}
