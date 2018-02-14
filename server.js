const express = require('express');
const path  = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongo = require('mongodb');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/MeanApp', (error, conn) => {
    if(error){console.log("Connection failed:", error);}
    else{console.log("Successfully connected to MongoDB on port 27017"); }
});
const db = mongoose.connection;
const routes = require('./server/routes/index.routes');
const users = require('./server/routes/users.routes');

const app = express();

//view engine 
app.set('views', path.join(__dirname, 'views'));

//body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//set static folder (I may not need this)
app.use(express.static(path.join(__dirname, 'views')));

//Express session
app.use(session({
    secret: 'secret',
    saveUninitialized: true, 
    resave: true
}));

//initialise passport
app.use(passport.initialize());
app.use(passport.session());

//middleware for the falidator 
app.use(expressValidator({
    errorFormatter: (param, msg, value) => {
        let namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

            while(namespace.length){ formParam += '[' + namespace.shift() + ']';  }
            return{
                param: formParam,
                msg : msg,
                value: value
            };
    }
}));
 //connect flash middleware
 app.use(flash());

 //global variables
 app.use((req, res, next) => {
     res.locals.success_msg = req.flash('success_msg');
     res.locals.error_msg = req.flash('error_msg');
     res.locals.error = req.flash('error');
     next();
 })
    
// middleware routes 
app.use('/', routes);
app.use('/users', users);

//set port 
let port = 3000;
app.listen(port , () => {
    console.log('Server started on port '+ port);
});