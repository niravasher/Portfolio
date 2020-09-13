var express = require('express');
var app = express();
var controller = require('./controller/controller.js');
app.set('view-engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.use('/', express.static('./public'));
controller(app);
app.listen(1234);
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
console.log("you are listening to port 1234");