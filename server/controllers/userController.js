import model from '../models';

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

export default {
    signUp
}
