var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = express.Router();
var routes = require('./src/app/routes/user.js');

// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;
// if(app.get('env') == 'development') {
//     app.use(errorHandler());
// }

app.use('/public',express.static(__dirname + '/src/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
app.use('/app/conf', express.static(__dirname + '/src/app/conf'));
// app.use('/systemjs-angular-loader.js', express.static(__dirname + '/systemjs-angular-loader.js'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
})

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});
router.get('/getAllUsers', routes.getAllUsers);

app.use('/api', router);

var server = app.listen(port, errCallback);

function errCallback(err) {
    var host = server.address().address;
    var prot = server.address().port;
    console.log('app listening at http://%s:%s', host, port)
    console.log('running server on port - ' + port);
}

function errorHandler (err, req, res, next) {
    // if (res.headersSent) {
    //     return next(err)
    // }
    // res.status(500)
    // res.render('error', { error: err })
}

