const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const products_controller = require('./products-controller/products_controller');
const connectionString = require('./secrets.js');
const cors = require('cors');
const config = require('./config');


const app = express();

app.use( bodyParser.json() );
app.use(cors({origin: 'http://localhost:3000'}))

massive( connectionString ).then( dbInstance => {
    app.set('db' , dbInstance);


app.get('/', products_controller.getAll)

//what I added with Joe's file he sent to us
app.use(session({
  resave: true, 
  saveUninitialized: true, 
  secret: config.sessionSecret
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new Auth0Strategy({    //this needs to be copied EXACTLY the same caps and all
   domain:       config.auth0.domain,
   clientID:     config.auth0.clientID,
   clientSecret: config.auth0.clientSecret,
   callbackURL:  config.auth0.callbackUrl
  },  
  //set up to here and then go to the Auth0 site and create a new app/client
  //all three of the domian file,client secret and other stuff from Auth0 goes into config.js
  function(accessToken, refreshToken, extraParams, profile, done) {
      console.log('someone tried to access', profile);


//logic for passing in new or existing account


















      done(null, {loggedIn : true})
  }));
  

passport.serializeUser(function(user, done) {      //at this point the authentication process is over
  console.log('serializing', user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    console.log('deserialize', user)
  done(null, user);
});

//these are the endppints, this first one kicks off the auth session
app.get('/auth', passport.authenticate('auth0'));

app.get('/auth/callback', passport.authenticate('auth0', 

{ successRedirect: 'http://localhost:3000/'}));

app.get('/auth/me', function(req, res) {
  if (!req.user) return res.status(200).send('No one logged in!');
  res.status(200).send(req.user);
})
app.get('/auth/logout', function(req, res) {
  req.logout();
  res.redirect('/');
})









} );

const port = 4000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );