const sequelize = require('../config/connection');
const seedUser = require('./user');
const seedPost = require('./post');
const seedComment = require('./comment');


const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedPost();

    await seedComment();  

    process.exit(0);
  };
  
  seedAll();