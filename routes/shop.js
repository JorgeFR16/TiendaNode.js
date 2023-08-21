const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log('In another middlewere');
  res.send('<h1>Hola desde Express</h1>');
}); 

module.exports = router;