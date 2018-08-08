const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);


const Server = require('./DesignLayer/Server/Server');
const mysql = require('./DesignLayer/Database/mysql/getInstance');
const relation = require('./DesignLayer/Database/mysql/relationship');
const getExpressInstance = require('./DesignLayer/Express/getInstance');
const expressRestful = getExpressInstance(app);

const server = new Server(app, 5000);
mysql.connect();
relation.setup();
expressRestful.setUp();
server.start();


/*io.on('connection', (socket) => {
    console.log(' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

   SocketRootRoutes(io, socket);
});*/

