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
    UPDATE_CURRENT_DATA: (state, currentData) => {
        state.socketData.currentData = currentData;
    },
    CREATE_SOCKET: (state) => {
        state.socketData.socket = io('localhost:3000');
    },
    SET_CURRENT_TABLE: (state, table) => {
        state.socketData.currentTable = table;
    },
};

export default mutations
