const mutations = {
    LOGIN_USER: (state) => {
        state.loggedIn = true;
    },
    LOGOUT_USER: (state) => {
        state.loggedIn = false;
    },
    UPDATE_CONNECT_USER: (state, connectedUsers) => {
        state.socketData.connectedUsers = connectedUsers;
    }
}

export default mutations
