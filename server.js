const path = require('path');
const fs = require('fs');
const express = require('express');
// Import express-session to make connection to sequelize database
const session = require('express-session');
// Import express-handlebars to allow use of handlebars
const exphbs = require('express-handlebars');
// Import sequelize connection, sequelize store, helpers, and routes
const routes = require('./controllers');
const sequelize = require('./config/connection');
// Import Helper function which will help format date
const helpers = require('./utils/helpers');
// Create a new sequelize store using the express-session package
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Configure and link a session object with the sequelize store
const sess = {
    secret: 'MVC Tech Blog',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine
app.set("view engine", "hbs");
app.engine(
"hbs",
handlebars({
layoutsDir: __dirname + "/views/layouts",
extname: "hbs",
})
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// This will turn on the routes
app.use(routes);

// Turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Port initiated. Now listening at ${PORT}!`);
  });
});