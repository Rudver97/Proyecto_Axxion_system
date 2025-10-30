const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const Keys = require('./keys'); // aquí está el JWT_SECRET
const User = require('../models/user');

const opts = {

    //jwtFromRequest: indica de dónde sacar el token JWT → del header Authorization: Bearer <token>
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //secretOrKey: tu clave secreta para verificar la firma del token (viene desde .env)
    secretOrKey: Keys.secretOrKey
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findById(jwt_payload.id, (err, user) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }
    });
}));
