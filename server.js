const path = require('path');

const express = require('express');
// Import express-session to make connection to sequelize database
const session = require('express-session');
// Import express-handlebars to allow use of handlebars
const exphbs = require('express-handlebars');

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
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

const hbs = exphbs.create({ helpers });

// Set Handlebars as the default template engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// This will turn on the routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`It is now listening at port ${PORT}!!!`));
});