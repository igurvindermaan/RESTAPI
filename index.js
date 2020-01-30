var express = require('express');
var app = express();
var things  = require('./things');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

// // app.get('/', function(req,res) {
// //     res.send("Hello world")
// // });

// // app.use('/things', things);

// // app.get('/:name/:id', function(req, res){
// //     res.send('The name is' + req.params.name + ' id is ' + req.params.id )
// // });

// // app.use('/things', function(req, res, next){
// //     console.log(' a request recieved at ' + Date.now());
// //     next();
// // });

// // app.get('/things', function(req,res) {
// //     res.send('Things');
// // })
// app.get('/', function(req, res){
//     res.render('form');
//  });
// app.set('view engine', 'pug');
// app.set('views','./views');
// // app.get('/first_template', function(req,res){
// //     res.render('first_view');
// // })

// // app.get('/dynamic_view', function(req,res){
// //     res.render('dynamic', {
// //         name: "Gurvinder",
// //         url: "http://www.gurvinder.com"
// //     });
// // });
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended : true}));
// app.use(upload.array());
// app.use(express.static('public'));

// app.post('/' ,function(req,res){
//     console.log(req.body);
//     res.send("recieved your request");
// })
// app.listen(5000);




// app.use(CookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(upload.array());

var movies = require('./movies.js')
app.use('/movies', movies);
app.listen(5000);