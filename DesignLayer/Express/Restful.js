const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const rootRoutes = require('../../restfulModule/rootRoutes');



module.exports = class Restful {
    constructor(app) {
        this.app = app
    }

    setupMiddleware() {
        this.app.use(cors());

   

        
        //use static folder
        this.app.use(express.static('public'));



        //config urlencode
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true}));

        this.app.use(compression());
    }

    setupRoutes() {
        rootRoutes(this.app);
    }

    setUp() {
        this.setupMiddleware();
        this.setupRoutes();
    }
}