require('dotenv').config();

const App = require('./App');

const server = App.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = server;