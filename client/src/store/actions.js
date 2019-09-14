import {loginUser, signupUser} from "../utils/apiRequests";
import router from "../router";

const actions = {
    CHECK_IF_USER_IS_LOGGED(context) {
        const token = localStorage.getItem('jwt');
        if (token) {
            context.commit('LOGIN_USER');
            context.dispatch('LOGIN_SUCCESS', token)
        }
    },
    async LOGIN_USER(context, {login, password}) {
        try {
            const {data} = await loginUser(login, password);
            context.commit('LOGIN_USER');
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
    LOGOUT_USER: (context) => {
        localStorage.removeItem('jwt');
        context.commit('LOGOUT_USER');
    },
    async LOGIN_SUCCESS(context, jwt) {
        localStorage.setItem('jwt', jwt);
        router.push('app');
    },
    SIGNUP_SUCCESS: (context) => {
        context.$router.push('/login');
    },
    UPDATE_CONNECT_USER: (context, connectedUsers) => {
        context.commit('UPDATE_CONNECT_USER', connectedUsers);
    },
    UPDATE_TABLES_NAMES: (context, tablesNames) => {
        context.commit('UPDATE_TABLES_NAMES', tablesNames);
    }
};

export default actions
