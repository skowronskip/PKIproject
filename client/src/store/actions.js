import {loginUser, signupUser} from "../utils/apiRequests";

const actions = {
    LOGIN_USER: async (context, {login, password}) => {
        try {
            const {data} = await loginUser(login, password);
            context.dispatch('LOGIN_SUCCESS', data.token)
        } catch (e) {
            // TODO HANDLE ERROR
        }
    },
    SIGNUP_USER: async (context, {login, password, email}) => {
        try {
            await signupUser(login, password, email);
            context.dispatch('SIGNUP_SUCCESS')
        } catch (e) {
            // TODO HANDLE ERROR
        }
    },
    LOGIN_SUCCESS: (context, jwt) => {
        localStorage.setItem('jwt', jwt);
    },
    SIGNUP_SUCCESS: (context) => {
        context.$router.push('/login');
    },
}

export default actions
