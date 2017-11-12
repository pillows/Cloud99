var express = require('express');
var path = require('path');
var index = require('./routes/index');
var results = require('./routes/results');
var store = require('./routes/store');
var manage = require('./routes/manage');
var admin = require('./routes/admin')
var bodyParser = require('body-parser');


var app = express();


//view
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname +'/views');
app.set('view_engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//static folder

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, '/views')));
//app.use(express.static(__dirname + '/views'));
//body parser middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/results', results);
app.use('/store', store);
app.use('/manage', manage);
app.use('/admin',admin);


var port = 3000;
app.listen(port, function(){
	console.log('server listening on port: ' +port);
});
