
module.exports = class Server {
    constructor(app, port) {
        this.http = require('http').Server(app);
        this.io = require('socket.io')(this.http);
        this.PORT = process.env.PORT || port;
    }

    getIO() {
        return this.io;
    }

    start() {
        this.http.listen(this.PORT, () => {
            console.log(`Server running on ${this.PORT}`);
        });
    }
}




