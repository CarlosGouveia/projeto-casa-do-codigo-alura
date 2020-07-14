const express = require('express');
const app = express();

rotas = require('../app/rotas/rotas');
rotas(app);

module.exports = app;