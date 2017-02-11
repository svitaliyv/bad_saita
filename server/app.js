var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config.json');

app.use(bodyParser.urlencoded({ extended: false }));

var api = require('./api/questions');
app.use('/api/questions', api(app));

var port = config.port;
app.listen(port, () => {
    console.log(`Bad Saita api starting on port ${port}!`);
});