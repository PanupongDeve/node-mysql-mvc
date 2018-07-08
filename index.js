const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);
const sequelize = require('./database/sequelize');
const connection = require('./database/connection');


const ExpressMiddlewares = require('./middlewares/ExpressMiddlewares');
const SocketRootRoutes = require('./routes/socketRoutes/rootRoutes');
const ResfulRoutes = require('./routes/restfulRoutes/rootRoutes');


connection(sequelize); 

require('./routes/restfulRoutes/relationship');

ExpressMiddlewares(app);
//SocketMiddlewares(io);


/*io.on('connection', (socket) => {
    console.log(' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

   SocketRootRoutes(io, socket);
});*/


//---- Route------------

ResfulRoutes(app);

const PORT = process.env.PORT || 5000;


http.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

