const bcrypt = require('bcryptjs');
const User = require("./models/User");
const LocalStrategy = require('passport-local').Strategy

module.exports = function(passport){ 
 
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
 
    passport.deserializeUser((id, done) => {
        try {
            User.findByPk(id).then((user) => {
                done(null, user);
            });
            
        } catch (err) {
            done(err, null);
        }
    });

    passport.use(new LocalStrategy(
    //campos que vem do form de login
    {
        usernameField: 'nome',
        passwordField: 'paseword'
    },
    (nome, paseword, done) => {
        try {
            console.log(paseword);
            console.log(nome);
            return User.findOne({where: {
                nome: nome
             }}).then((user) => {
                if (!user) { return done(null, false) }
    
                const isValid = bcrypt.compareSync(paseword, user.paseword);
                if (!isValid) return done(null, false)
                
                return done(null, user)
             });
            
        } catch (err) {
            done(err, false);
        }
    }));
}