const express = require('express');
const router = express.Router();

const { setupDatabase, sequelize } = require('../database/database');

const initializeDatabase = async () => {
  await setupDatabase(); // Call the setupDatabase function
};

/* GET home page. */
router.get('/', function(req, res, next) {
  initializeDatabase();
  console.log("hello");
  res.render('index', { title: 'Express' });
});

module.exports = router;
