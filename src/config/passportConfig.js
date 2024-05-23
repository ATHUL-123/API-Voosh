const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github').Strategy;
const User = require('../models/userModel');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ oauthId: profile.id, oauthProvider: 'google' });
    if (!user) {
        user = await User.create({ 
            oauthId: profile.id, 
            oauthProvider: 'google',
            email: profile.emails[0].value,
            name: profile.displayName,
            photo: profile.photos[0].value
        });
    }
    return done(null, user);
}));

passport.use(new GitHubStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ oauthId: profile.id, oauthProvider: 'github' });
    if (!user) {
        user = await User.create({ 
            oauthId: profile.id, 
            oauthProvider: 'github',
            email: profile.emails[0].value,
            name: profile.displayName,
            photo: profile.photos[0].value
        });
    }
    return done(null, user);
}));



passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => User.findById(id, done));
