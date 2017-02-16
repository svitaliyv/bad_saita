var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var config = require('./config.json');
var cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(__dirname + '/../dist'));

var api = require('./api/questions');

app.use('/api/questions', api(app));

app.use('/', (req, res, next) => {
    return res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

var port = config.port;
app.listen(port, () => {
    console.log(`Bad Saita api starting on port ${port}!`);
});