const express = require('express');

const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

// app.use('/', (res, req, next) => {
//   console.log('This always runs!');
//   next();
// });

app.use(express.urlencoded({extended: true})); // aqui podria ser bodyParser.urlencoded({extended: false}); esto esta haciendo uso de una tercera libreria mientras que con express viene incluido pero lo podria llegar a quitar en algun momento

app.use(adminRoutes);
app.use(shopRoutes);





app.listen(3000);

