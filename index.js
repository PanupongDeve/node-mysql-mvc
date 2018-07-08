const express = require('express');
const app = express();
const http = require('http').Server(app)
const io = require('socket.io')(http);
const sequelize = require('./database/connection');
const authorize = require('./database/authorize');


const ExpressMiddlewares = require('./middlewares/ExpressMiddlewares');
const SocketRootRoutes = require('./routes/socketRoutes/rootRoutes');
const ResfulRoutes = require('./routes/restfulRoutes/rootRoutes');


authorize(sequelize); 


ExpressMiddlewares(app);
//SocketMiddlewares(io);


/*io.on('connection', (socket) => {
    console.log(' a user connected');

    socket.on('disconnect', () => {
        console.log('user disconnected')
    });

   SocketRootRoutes(io, socket);
});


//---- Route------------

ResfulRoutes(app);*/

const PORT = process.env.PORT || 5000;


http.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

