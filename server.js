const express = require('express');
const sequelize = require('./config/connection');

// const model = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('server started!');
  })
});
