const state = {
    loggedIn: false,
    socketData: {
        socket: null,
        currentTable: null,
        specificQuery: null,
        currentData: {
            data: [],
            error: null
        },
        tablesNames: [],
        connectedUsers: 0
    }
};

export default state
