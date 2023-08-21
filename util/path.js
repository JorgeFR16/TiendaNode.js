const path = require('path');

// Esta forma hace los mismo que la de abajo pero tiene funciones deprecadas
// module.export = path.dirname(process.mainModule.filename);

module.exports = path.dirname(require.main.filename);