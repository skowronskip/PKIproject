import jwt from 'jsonwebtoken';
import model from '../models';
import config from "../config/config";

const {User} = model;

async function signUp({login, email, password}) {
    try {
        return User.create({login, email, password});
    } catch (e) {
        return null;
    }
}

async function login ({login, password}) {
    const user = await User.findOne({where: {login, password}});
    if (user) {
        return jwt.sign({login},
            config.secret,
            { expiresIn: '24h' }
        );
    }
    return null;
}

export default {
    signUp,
    login
}
