const express = require('express');
const sequelize = require('./config/connection');
const controllers = require('./controllers');
const exphbs = require('express-handlebars');
// const model = require('./models/Task');

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(controllers);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('server started!');
  })
});
