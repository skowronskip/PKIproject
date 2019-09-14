const getters = {
    isLoggedIn: (state) => state.loggedIn,
    getConnectedUsers: (state) => state.socketData.connectedUsers
};

export default getters
