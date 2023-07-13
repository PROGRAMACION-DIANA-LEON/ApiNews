const express = require('express');

const { login } = require('../controllers/LoginController');

const api = express.Router();

api.post('/IniciarSesion', login);

module.exports = api;