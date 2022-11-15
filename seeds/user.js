const { User } = require('../models');

const userData = [
  {
    username: 'hhealing123',
    password: 'samplepassword1'
    
  },
  {
    username: 'hhealing1234',
    password: 'samplepassword2'
  },
  {
    username: 'hhealing12345',
    password: 'samplepassword3'
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;