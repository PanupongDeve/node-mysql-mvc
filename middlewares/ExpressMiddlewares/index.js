const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

// expires Cookies with Login
const expiresIn = 60 * 60 * 24 * 5 * 1000;


module.exports = (app) => {

    app.use(cors());

   

        
    //use static folder
    app.use(express.static('public'));



    //config urlencode
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true}));

    app.use(compression());

}