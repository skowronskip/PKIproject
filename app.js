import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import userRoutes from "./server/routes/userRoutes";
import leagueRoutes from "./server/routes/leagueRoutes";
import socketIo from 'socket.io';
import databaseService from "./server/services/databaseService";
import leagueService from "./server/services/leagueService";
import teamService from "./server/services/teamService";

const hostname = '127.0.0.1';
const port = 3000;
const app = express(); // setup express application
const server = http.createServer(app);

app.use(logger('dev')); // log requests to the console

// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Access-Control-Allow-Origin,Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

userRoutes(app);
leagueRoutes(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the default API route',
}));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

let clients = [];

const io = socketIo(server);

io.on('connection', async (socket) => {
    clients.push({
        socket: socket,
        currentTable: null,
        specificQuery: null,
    });
    io.emit('UPDATE_CONNECTED_USERS', {connectedUsers: clients.length});
    socket.emit('UPDATE_TABLES_NAMES', {tablesNames: await databaseService.showTables()});

    socket.on('GET_TABLE', async (table) => {
        const clientIndex = clients.findIndex((client) => client.socket.id === socket.id);
        if (clientIndex !== -1) {
            clients[clientIndex].currentTable = table;
            clients[clientIndex].specificQuery = null;
            await updateCurrentData(socket, table);
        }
    });
    socket.on('GET_QUERY', async (query) => {
        const clientIndex = clients.findIndex((client) => client.socket.id === socket.id);
        if (clientIndex !== -1) {
            clients[clientIndex].currentTable = null;
            clients[clientIndex].specificQuery = query;
            await updateCurrentDataFromQuery(socket, query);
        }
    });
    socket.on('ADD_RECORD', async (data) => {
        await addRecord(socket, data);
    });
    socket.on('EDIT_RECORD', async (data) => {
        await editRecord(socket, data);
    });
    socket.on('REMOVE_RECORD', async (data) => {
        await removeRecord(socket, data);
    });
    socket.on('disconnect', () => {
        clients = clients.filter((client) => client.socket.id !== socket.id);
        io.emit('UPDATE_CONNECTED_USERS', {connectedUsers: clients.length});
    })
});

async function updateCurrentData(socket, table) {
    switch(table) {
        case 'Leagues':
            socket.emit('UPDATE_CURRENT_DATA', {currentData: {data: await leagueService.getAllLeagues()}});
            break;
        case 'Teams':
            socket.emit('UPDATE_CURRENT_DATA', {currentData: {data: await teamService.getAllTeams()}});
            break;
        case 'Users':
            break;
        default:
            console.log('Unknown table query ' + table);
    }
}

async function updateCurrentDataFromQuery(socket, query) {
    const currentData = await databaseService.getQuery(query);
    if (currentData.error) {
        return socket.emit('UPDATE_CURRENT_DATA', {currentData: {error: currentData.error}});
    }
    return socket.emit('UPDATE_CURRENT_DATA', {currentData: {data: currentData[0]}});
}

async function updateClientsCurrentData() {
    await Promise.all(clients.map(async (client) => {
        if (client.specificQuery) {
            return updateCurrentDataFromQuery(client.socket, client.specificQuery);
        }
        return updateCurrentData(client.socket, client.currentTable)
    }));
}

async function addRecord(socket, data) {
    switch(data.table) {
        case 'Leagues':
            await leagueService.createLeague(data.form);
            break;
        case 'Teams':
            await teamService.createTeam(data.form);
            break;
        case 'Users':
            break;
        default:
            console.log('Unknown table query ' + data.table);
    }
    await updateClientsCurrentData();
}

async function editRecord(socket, data) {
    switch(data.table) {
        case 'Leagues':
            await leagueService.updateLeague(data.form);
            break;
        case 'Teams':
            await teamService.updateTeam(data.form);
            break;
        case 'Users':
            break;
        default:
            console.log('Unknown table query ' + data.table);
    }
    await updateClientsCurrentData();
}

async function removeRecord(socket, data) {
    switch(data.table) {
        case 'Leagues':
            await leagueService.deleteLeague(data.form.id);
            break;
        case 'Teams':
            await teamService.deleteTeam(data.form.id);
            break;
        case 'Users':
            break;
        default:
            console.log('Unknown table query ' + data.table);
    }
    await updateClientsCurrentData();
}
