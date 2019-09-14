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
    }
};

export default mutations
