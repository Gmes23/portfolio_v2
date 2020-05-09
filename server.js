require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')
const cors = require('cors')
const path = require('path');
const favicon = require('express-favicon');
const app = express();


app.use(favicon(__dirname + '/build/favicon.ico'));

const PORT = process.env.PORT || 6000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})


app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())


app.use((req, res, next) => {
  res.locals.data = {}
  next()
})


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use(express.static('public'))

// app.use('/api', require('./api'))



// html pages routes -------------------------------------------
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/main.html'));
});


app.get('/project01.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/project01.html'));
});

app.get('/project02.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/project02.html'));
});

app.get('/project03.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/project03.html'));
});

app.get('/project04.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/project04.html'));
});


app.get('/project05.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/project05.html'));
});


app.get('/project06.html', function(req, res) {
  res.sendFile(path.join(__dirname + '/project06.html'));
});















// // --------------------  Database request -----------------------
// const pool = require('./db/configForUserData.js')

// // All fetch request directly from react components need /api before route name
// app.get('/api/savedArticles', (request, response) => {
  
//   const userID = request.user.id

//   pool.query('SELECT * FROM products WHERE user_id=$1', [userID], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// })

// app.delete('/api/deleteArticles', (request, response) => {
  
//   // Gets the product ID from the front end and matches it to one in the database
//   const productID = request.body.item.pid

//   pool.query('DELETE FROM products WHERE pid=$1', [productID], (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
// })



// app.use('*', (req, res) => {
//   res.status(404).send('Not Found')
// })

// app.use((err, req, res, next) => {
//   console.warn(err)
//   res.status(500).json({ error: err, message: err.message })
// })

