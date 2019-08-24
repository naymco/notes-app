const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/Users');

passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    const user = await Users.findOne({email: email});
    if(!user) {
        return done(null, false, { mensage: 'Not user found.'});
    }else{
        const match = await user.matchPassword(password);
        if(match) {
            return done(null, user);
        }else{
            return done(null, false, { mensage: 'Incorrect password'});
        }
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Users.findById(id, (err, user) => {
        done(err, user);
    });
});
