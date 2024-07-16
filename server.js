const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
// const model = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('server started!');
  })
});
