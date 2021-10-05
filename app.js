var username = "";
var fee = "";
var about = "";

cemail_opinion1_var = "";
stars_opinion1_var = "";
content_opinion1_var = "";
cemail_opinion2_var = "";
stars_opinion2_var = "";
content_opinion2_var = "";
cemail_opinion3_var = "";
stars_opinion3_var = "";
content_opinion3_var = "";

//import modules
const express = require('express');
const path = require('path');
const sql = require("./DB/db.js");
const port = 5000;
// init the app
const app = express();
const CRUD_functions = require("./updateProject2/CRUD_functions");
bodyParser = require("body-parser");
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { profile } = require('console');
const methodoverride = require('method-override');
const { getgroups } = require('process');
var promise = require('promise');

//app.use(express.urlencoded({extended: false}))

//load view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

//config session
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24 //1 day
    }
}));

//passport config
app.use(passport.initialize());
app.use(passport.session());

// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//config cookie parse
app.use(cookieParser('secret'));

app.use(express.static('updateProject2'));
app.use(express.static('views'));

//enable flash
app.use(flash());

//method-override
app.use(methodoverride('_method'));

// //home page
// app.get('/', CRUD_functions.checkLoggedOut, CRUD_functions.getHomePage);

app.get('/',(req, res) => {
    if(!req.isAuthenticated()){
        log_var = 'התחבר';
        log_path = '/log_in_form';
    }
    else{
        log_path = '/log_out';
        log_var = 'התנתק';
    }

    sql.query("SELECT * FROM Review limit 3", (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        cemail_opinion1_var = mysqlres[0]['Cemail'];
        stars_opinion1_var = mysqlres[0]['stars'];
        content_opinion1_var = mysqlres[0]['content'];
        cemail_opinion2_var = mysqlres[1]['Cemail'];
        stars_opinion2_var = mysqlres[1]['stars'];
        content_opinion2_var = mysqlres[1]['content'];
        cemail_opinion3_var = mysqlres[2]['Cemail'];
        stars_opinion3_var = mysqlres[2]['stars'];
        content_opinion3_var = mysqlres[2]['content'];

    })

    cemail_opinion1 = cemail_opinion1_var;
    stars_opinion1 = stars_opinion1_var;
    content_opinion1 = content_opinion3_var;
    cemail_opinion2 = cemail_opinion2_var;
    stars_opinion2 = stars_opinion2_var;
    content_opinion2 = content_opinion3_var;
    cemail_opinion3 = cemail_opinion3_var;
    stars_opinion3 = stars_opinion3_var;
    content_opinion3 = content_opinion3_var;

    res.render('index', {log_var, log_path}, );
 });

app.get('/profile',(req, res) => {
    res.render('profile');
 });
 
// sign up page
 app.get('/sign_up_form', (req, res) => {
     res.sendFile(path.join(__dirname, '/updateProject2/sign_up_form.html'));
});

// create new customer in db
app.post('/sign_up_form', CRUD_functions.createNew); 

// log in page
app.get('/log_in_form', CRUD_functions.checkLoggedIn, CRUD_functions.getHomePage);

//app.get('/log_in_form', CRUD_functions.checkLoggedOut, CRUD_functions.postLogOut);

// log in
app.post('/log_in_form', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/log_in_form",
    successFlash: true,
    failureFlash: true
})); 

// log out
app.get('/log_out', CRUD_functions.postLogOut); 

// disengagement
app.get('/disengagement',(req, res) => {
    res.sendFile(path.join(__dirname, '/updateProject2/disengagement.html'));
 });

 app.delete('/disengagement', CRUD_functions.deleteCustomer, (req, res) => {
        res.sendFile(path.join(__dirname,'updateProject2/verifyDelete.html'));
});

// contact_us
app.get('/contact_us',(req, res) => {
    res.sendFile(path.join(__dirname,'/updateProject2/contact-us.html'));
 });

// create new message in DB
app.post('/contact_us', CRUD_functions.NewMessage); 

// register page
app.get('/register_message',(req, res) => {
    res.render('register_message');
 });

 // about page
app.get('/about',(req, res) => {
    res.sendFile(path.join(__dirname,'/updateProject2/about.html'));
 });
 
 
// group training page
app.get('/groupTraining', (req, res) => {
    sql.query("SELECT username, about, fee FROM Provider WHERE service_type = 'אילוף בקבוצות'", (err, mysqlres) => {
        if (err) {
            console.log(req.body.email);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        console.log(mysqlres[0]);
        username = mysqlres[0]['username'];
        about = mysqlres[0]['about'];
        fee = mysqlres[0]['fee'];

        });
        username_var = username;
        about_var = about
        fee_var = fee;
        res.render('groupTraining');
 });

 // group training page
app.get('/dogBarbers', (req, res) => {
    sql.query("SELECT username, about, fee FROM Provider WHERE service_type = 'ספר כלבים'", (err, mysqlres) => {
        if (err) {
            console.log(req.body.email);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        console.log(mysqlres[0]);
        username = mysqlres[0]['username'];
        about = mysqlres[0]['about'];
        fee = mysqlres[0]['fee'];

        });
        username_var = username;
        about_var = about
        fee_var = fee;
        res.render('dogBarbers');
 });

  // group training page
app.get('/personalTraining', (req, res) => {
    sql.query("SELECT username, about, fee FROM Provider WHERE service_type = 'אילוף אישי'", (err, mysqlres) => {
        if (err) {
            console.log(req.body.email);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        console.log(mysqlres[0]);
        username = mysqlres[0]['username'];
        about = mysqlres[0]['about'];
        fee = mysqlres[0]['fee'];

        });
        username_var = username;
        about_var = about
        fee_var = fee;
        res.render('personalTraining');
 });

// aguility page
app.get('/aguility',(req, res) => {
    res.render('aguility');
});

// dog walkers page
app.get('/dogWalkers',(req, res) => {
    res.render('dogWalkers');
});

// dog sitters page
app.get('/dogSitters',(req, res) => {
    res.render('dogSitters');
});

// pensions page
app.get('/pensions',(req, res) => {
    res.render('pensions');
});

// set server to listen at port
app.listen(5000, () => {
    console.log("Server is running at port " + port);
});