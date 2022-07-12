var express = require('express');
var app = express();
const bodyParser = require("body-parser");
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;
const path = require("path");
app.set('view engine', 'ejs');
app.use(express.static('assets'));
app.use(express.static(path.join(__dirname, 'public')))
var urlencodedParser = bodyParser.urlencoded({extended:false});
app.set('views', path.join(__dirname, 'views'));
app.use(urlencodedParser);
const equationRoutes = require('./routes/equations');
app.use('/', equationRoutes);
const mongoose = require('mongoose');

server.listen(port, function () {
    console.log(`application is running at: http://localhost:${port}`);
});