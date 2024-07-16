const router = require('express').Router();
const api = require('./api');

// localhost:3001/api
router.use("/api", api);

// localhost:3001/pikachu
router.get("/pikachu", (req, res) => {
  res.json('hello Pikachu!');
})

module.exports = router;