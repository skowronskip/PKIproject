const getters = {
    isLoggedIn: (state) => state.loggedIn,
    getConnectedUsers: (state) => state.socketData.connectedUsers,
    getTablesNames: (state) => state.socketData.tablesNames,
    getSocket: (state) => state.socketData.socket,
    getCurrentTable: (state) => state.socketData.currentTable,
    getCurrentData: (state) => state.socketData.currentData,
    getSpecificQuery: (state) => state.socketData.specificQuery
};

export default getters
