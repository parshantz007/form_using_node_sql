const con = require('./dbConnection');
let sql = require('mysql');
var path = require('path')
var createError = require('http-errors')

const bodyParser = require('body-parser') // from chatgpt

const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.json());





// Require static assets from public folder
// app.use(express.static(path.join(__dirname, 'public')));

// Set 'views' directory for any views 
// being rendered res.render()
// app.set('views', path.join(__dirname, 'views'));

// Set view engine as EJS
app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');






// app.get('', (req, resp) => {
//     con.query("select * from teacher", (err, result) => {
//         if (err) {
//             resp.send("error here");
//         }
//         else {
//             resp.send(result);
//         } 
//     })

// });

app.get('/', function (req, res, next) {
    res.render('index', { title: 'User Form' })
  })

app.post('/user_form', (req, resp) => {
    var firstName = req.body.firstName
    var lastName = req.body.lastName
    var age = req.body.age
    const sqlQ=`insert into teacher (firstName,lastName,age) values ("${ firstName }", "${ lastName }", "${ age }")`;
    con.query(sqlQ, (err, result) => {
        if (err) {
            resp.send("error here");
        }   
        else {
            resp.send("data stored successfully");
        }
    });
});

app.use(function (req, res, next) {
    next(createError(404))
  })

console.log('Server is running..');

// app.listen();
app.listen(5500);