const { Post } = require('../models');

const postData = [
  {
    user_id: 1,
    title: 'I love ORM',
    content: 'ORM can be hard sometimes but it is really fun to learn!',
  },
  {
    user_id: 2,
    title: 'Setting up the routes is hard',
    content: 'I really hate setting up the routes...',
  },
  {
    user_id: 3,
    title: 'Coding is fun',
    content: 'Coding can be hard sometimes but it is really fun to learn!',
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;