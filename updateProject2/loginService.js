const sql = require("../DB/db.js");
var promise = require('promise')

let findUserByEmail = (email) => {
    return new promise(((resolve, reject) => {
        try{
            sql.query("SELECT email, password FROM Provider WHERE email =? UNION ALL SELECT email, password FROM Customer WHERE email = ?", [email, email], (err, mysqlres) => {
                if (err) {
                    reject(err);
                }
                let user = mysqlres[0];
                resolve(user);
                })
        }catch(e){
            reject(e);
        }
    }));
};

let comparePasswordUser = (email) => {
    return new promise(((resolve, reject) => {
        try{
            sql.query("SELECT password FROM Provider WHERE email = ? UNION ALL SELECT password FROM CUSTOMER WHERE email = ?", [email, email], (err, mysqlres) => {
                if (err) {
                    reject(err);
                }
                console.log("password compared")
                let user = mysqlres[0];
                resolve(true);
                })
        }catch(e){
            reject(e);
        }
    }));
};

module.exports = {findUserByEmail, comparePasswordUser}