const sql = require("../DB/db.js");
const express = require('express');
const passport = require("passport");
const app = express();
const passportLocal = require('./passport-config');
const initPassportLocal = require("./passport-config");
const { authenticate } = require("passport");

initPassportLocal();

const createNew = function(req,res){

    // Validate request
    if (!req.body) {
        if (res.status==404) {
            return res.render('/updateProject2/404_error.html');    
        };
    };

    //Choosing the right table from DB (customer or provider)
    if (req.body.customer=="true"){

        console.log(req.body.customer)

        sql.query("INSERT INTO Customer (email, username, password, city) VALUES (?,?,?,?)", [req.body.email, req.body.username, req.body.password, req.body.city], (err, mysqlres) => {
            if (err) {
                console.log("error: ", err);
                return;
            }
            console.log("created customer");
            return res.redirect('/register_message');
            });
        }else if(req.body.customer=="false"){
            console.log(req.body.customer)
            sql.query("INSERT INTO Provider (email, username, password, city, service_type, fee, about) VALUES (?,?,?,?,?,?,?)", [req.body.email, req.body.username, req.body.password, req.body.city, req.body.service_type, req.body.fee, req.body.about], (err, mysqlres) => {
                if (err) {
                    console.log("error: ", err);
                    return;
                }
                console.log("created provider");
                return res.redirect('/register_message');
                });
        }
};

let getHomePage = (req, res) => {
    return res.render('/');
};

let getProfilePage = (req, res) => {
    return res.sendFile(path.join(__dirname, 'updateProject2/profile.html'), {
        user: req.user
    }, console.log(req.user));
};

let getLoginPage = (req, res) => {
    return res.render('log_in_form');
}; 

let checkLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.render('log_in_form');
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if(!req.isAuthenticated()){
        return res.render('index');
    }
    next();
};

let postLogOut = (req, res) => {
    console.log("in post log out")
    req.session.destroy(function(err) {
        return res.redirect('/');
    });
};


const NewMessage = function(req,res){

    // Validate request
    if (!req.body) {
        if (res.status==404) {
            res.sendFile(path.join(__dirname, '/updateProject2/404.html'));    
        };
    };

    sql.query("INSERT INTO Contact_Us (email, full_name, phone, content) VALUES (?,?,?,?)", [req.body.email, req.body.full_name, req.body.phone, req.body.content], (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        console.log("created new message in db");
        res.redirect('/');
        return;
        });
};

const getReviews = function(req,res){

    // Validate request
    if (!req.body) {
        if (res.status==404) {
            res.sendFile(path.join(__dirname, '/updateProject2/404.html'));    
        };
    };

    sql.query("INSERT INTO Review (Cemail, Pemail, stars, content, service_type, number_of_sessions) VALUES (?,?,?,?,?,?)", [User.email, req.body.full_name, req.body.phone, req.body.content], (err, mysqlres) => {
        if (err) {
            console.log("error: ", err);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        console.log("created new message in db");
        res.redirect('/');
        return;
        });
};



// const sendReview = function(req,res){

//     // Validate request
//     if (!req.body) {
//         if (res.status==404) {
//             res.sendFile(path.join(__dirname, '/updateProject2/404.html'));    
//         };
//     };

//     sql.query("INSERT INTO Review (email, full_name, phone, content) VALUES (?,?,?,?)", [req.body.email, req.body.full_name, req.body.phone, req.body.content], (err, mysqlres) => {
//         if (err) {
//             console.log("error: ", err);
//             res.sendFile(path.join(__dirname, '/404.html'));
//             return;
//         }
//         console.log("created new message in db");
//         res.redirect('/');
//         return;
//         });
// };

const deleteCustomer = function(req,res){

    // Validate request
    if (!req.body) {
        if (res.status==404) {
            res.sendFile(path.join(__dirname, '/updateProject2/404.html'));    
        };
    };

    sql.query("DELETE FROM Customer WHERE email = ? AND password = ?", [req.body.email, req.body.password], (err, mysqlres) => {
        if (err) {
            console.log(req.body.email);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        });
        return res.render('index');
};

const getGroupTraining = function(req,res){

    // Validate request
    if (!req.body) {
        if (res.status==404) {
            res.sendFile(path.join(__dirname, '/updateProject2/404.html'));    
        };
    };

    sql.query("SELECT username, about, fee FROM Provider WHERE service_type = 'אילוף בקבוצות'", (err, mysqlres) => {
        if (err) {
            console.log(req.body.email);
            res.sendFile(path.join(__dirname, '/404.html'));
            return;
        }
        console.log(mysqlres[0]);
        return mysqlres[0];
        });
        
};


module.exports = {createNew, getLoginPage, checkLoggedOut, postLogOut, getProfilePage, checkLoggedIn, getHomePage, NewMessage, deleteCustomer, getGroupTraining, getReviews};



// const logIn = function(req,res){
//     // Validate request
//     if (!req.body) {
//         res.status(400).send({message: "Content can not be empty!"});
//         return;
//     };
//     try{
//         sql.query("SELECT * From Customer WHERE email = ? AND password= ?", [req.body.email, req.body.password], (err, mysqlres) => {
//             if (err) {
//                 console.log("error: ", err);
//                 res.status(400).send({message: "error in creating new contact: " + err});
//                 return;
//             }
//             console.log("customer logged in");
//             app.get('/profile',(req, res) => {
//                 res.render('profile');
//              });
//             return;
//             });
//     }catch(err){
//         console.log("invalid query");
//     };
// };

// const newCustomerValidation = function(req){
//     sql.query("SELECT email FROM Provider WHERE email= (?)", [req.body.email], function(err, results, feilds){
//         try{
//             if (results[0].email>""){
//                 console.log("email exists!");
//                 return false;
//             }
//         }catch(err){
//             console.log("email does not exist in DB")
//             return true;
//         } 
//     });
// }

// const newProviderValidation = function(req){
//     sql.query("SELECT email FROM Customer WHERE email= (?)", [req.body.email], function(err, results, feilds){
//         try{
//             if (results[0].email>""){
//                 console.log("email exists!");
//                 return false;
//             }
//         }catch(err){
//             console.log("email does not exist in DB")
//             return true;
//         } 
//     });
// }