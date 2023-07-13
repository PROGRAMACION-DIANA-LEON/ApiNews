const { User } = require('../models/UserModel')
//const jwt = require('jsonwebtoken');

const login = (request, response) => {
    const usuario = request.params.nick;
    const constraseña = request.params.contraseña;

    User.findOne(usuario,constraseña )
      .then(entitie => {
        if (entitie) {
          response.json(entitie);
        }
        else {
          response.status(404).send('Recurso no encontrado')
        }
      })
      .catch(err => {
        response.status(500).send('Error al iniciar sesion');
      })
  }

  module.exports = {
    login
};