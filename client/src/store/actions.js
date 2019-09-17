import {loginUser, signupUser} from "../utils/apiRequests";
import router from "../router";
import Vue from 'vue';

const actions = {
    CHECK_IF_USER_IS_LOGGED(context) {
        const token = localStorage.getItem('jwt');
        const login = localStorage.getItem('login');
        if (token && login) {
            context.commit('LOGIN_USER');
            context.dispatch('LOGIN_SUCCESS', {token, login})
        }
    },
    async LOGIN_USER(context, {login, password}) {
        try {
            const {data} = await loginUser(login, password);
            context.commit('LOGIN_USER');
            context.dispatch('LOGIN_SUCCESS', data)
        } catch (e) {
            Vue.toasted.show(e.response.data.message);
        }
    },
    SIGNUP_USER: async (context, {login, password, email}) => {
        try {
            await signupUser(login, password, email);
            context.dispatch('SIGNUP_SUCCESS')
        } catch (e) {
            Vue.toasted.show(e.response.data.message);
        }
    },
    LOGOUT_USER: (context) => {
        localStorage.removeItem('jwt');
        context.commit('LOGOUT_USER');
        router.push({path: '/'});
    },
    async LOGIN_SUCCESS(context, data) {
        localStorage.setItem('jwt', data.token);
        localStorage.setItem('login', data.login);
        context.dispatch('CREATE_SOCKET');
        router.push({name: 'app'});
    },
    SIGNUP_SUCCESS: () => {
        router.push({path: '/login'});
    },
    CREATE_SOCKET: (context) => {
        context.commit('CREATE_SOCKET');
    },
    UPDATE_CONNECT_USER: (context, connectedUsers) => {
        context.commit('UPDATE_CONNECT_USER', connectedUsers);
    },
    UPDATE_TABLES_NAMES: (context, tablesNames) => {
        context.commit('UPDATE_TABLES_NAMES', tablesNames);
    },
    UPDATE_CURRENT_DATA: (context, currentData) => {
        context.commit('UPDATE_CURRENT_DATA', currentData);
    },
    SHOW_TABLE_VIEW: (context, table) => {
        context.commit('SET_SPECIFIC_QUERY', null);
        context.commit('SET_CURRENT_TABLE', table);
        context.getters.getSocket.emit('GET_TABLE', table);
        router.push({name: 'table'});
    },
    SHOW_TABLE_VIEW_FROM_SPECIFIC_QUERY: (context, query) => {
        context.commit('SET_SPECIFIC_QUERY', query);
        context.commit('SET_CURRENT_TABLE', null);
        context.getters.getSocket.emit('GET_QUERY', query);
        router.push({name: 'table'});
    },
    ADD_RECORD: (context, form) => {
        context.getters.getSocket.emit('ADD_RECORD', {form, table: context.getters.getCurrentTable});
    },
    EDIT_RECORD: (context, form) => {
        context.getters.getSocket.emit('EDIT_RECORD', {form, table: context.getters.getCurrentTable});
    },
    REMOVE_RECORD: (context, form) => {
        context.getters.getSocket.emit('REMOVE_RECORD', {form, table: context.getters.getCurrentTable});
    }
};

export default actions
