const path = require('path');

const express = require('express');

// const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.get('/favicon.ico', (req, res) => res.status(204));

// app.use('/', (res, req, next) => {
//   console.log('This always runs!');
//   next();
// });


// urlencoded es un parseador del body de la req

app.use(express.urlencoded({extended: true})); // aqui podria ser bodyParser.urlencoded({extended: false}); esto esta haciendo uso de una tercera libreria mientras que con express viene incluido pero lo podria llegar a quitar en algun momento

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => { // maneja todas las rutas porque el '/? esta implicito
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);

