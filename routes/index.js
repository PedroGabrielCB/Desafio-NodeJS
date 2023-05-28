const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Desafio NodeJS Por: Pedro Gabriel Sousa'});
});

module.exports = router;
