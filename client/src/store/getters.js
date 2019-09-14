const getters = {
    isLoggedIn: (state) => state.loggedIn,
    getConnectedUsers: (state) => state.socketData.connectedUsers,
    getTablesNames: (state) => state.socketData.tablesNames,
    getSocket: (state) => state.socketData.socket
};

export default getters
