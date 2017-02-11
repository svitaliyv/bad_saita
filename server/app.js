var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

var api = require('./api/questions');
app.use('/api/questions', api(app));

var port = 3000;
app.listen(port, function() {
    console.log(`Bad Saita api starting on port ${port}!`);
});