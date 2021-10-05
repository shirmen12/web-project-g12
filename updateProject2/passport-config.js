const localStrategy = require('passport-local').Strategy;
const passport = require('passport');
const loginService = require('./loginService');

let initPassportLocal = () => {
    console.log("inside init")
    passport.use(new localStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true  
    }, async (req, email, password, done) => {
        try{
            let user = await loginService.findUserByEmail(email);
            console.log(user.email)
            if(!user){
                console.log("no user");
                return done(null,false,req.flash("errors", 'this user doesnt exist'));
            }
            if(user){
                //compare password
                console.log("comparing password")
                let match = await loginService.comparePasswordUser(user.email);
                if(match==true){
                    return done(null, user, null);
                }else{
                    return done(null, false, req.flash("errors", 'no match'));
                }
            }

        }catch(err){
            console.log(err)
            return done(null, false, err);
        }
    }));
};

passport.serializeUser((user,done) => {
    console.log("user serialized")
    console.log(user.email)
    done(null, user.email);
});

passport.deserializeUser((email,done) => {
    loginService.findUserByEmail(email).then((user)=> {
        console.log("user deserialized")
        return done(null, user);
    }).catch(error => {
        console.log("user deserialized")
        return done(error, null);
    });
});

module.exports = initPassportLocal;