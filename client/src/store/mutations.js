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
        if (currentData.error) {
            state.socketData.currentData = {...currentData, data: []};
        } else {
            state.socketData.currentData = {...currentData, error: null};

        }
    },
    CREATE_SOCKET: (state) => {
        state.socketData.socket = io('http://apipki.pskowron.ski');
    },
    SET_CURRENT_TABLE: (state, table) => {
        state.socketData.currentTable = table;
    },
    SET_SPECIFIC_QUERY: (state, query) => {
        state.socketData.specificQuery = query;
    },
};

export default mutations
