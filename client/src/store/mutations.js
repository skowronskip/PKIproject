import io from 'socket.io-client';

const mutations = {
    LOGIN_USER: (state) => {
        state.loggedIn = true;
    },
    LOGOUT_USER: (state) => {
        state.loggedIn = false;
    },
    UPDATE_CONNECT_USER: (state, connectedUsers) => {
        state.socketData.connectedUsers = connectedUsers;
    },
    UPDATE_TABLES_NAMES: (state, tablesNames) => {
        state.socketData.tablesNames = tablesNames;
    },
    CREATE_SOCKET: (state) => {
        state.socketData.socket = io('localhost:3000');
    },
};

export default mutations
