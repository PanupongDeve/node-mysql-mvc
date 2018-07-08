const toolsToken = require('../../utils/toolsToken');

module.exports = (io) => {
    io.use((socket, next) => {
        let token = socket.handshake.query.token;
        if (token && toolsToken.SocketVerifyToken(token)) {    
          return next();
        }
        return next(new Error('authentication error'));
      });
}