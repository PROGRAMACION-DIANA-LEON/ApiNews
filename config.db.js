//codigo comentado se usa para proyecto local
// const Sequelize = require('sequelize')


// const connection = new Sequelize('db_news', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// })


// connection.authenticate()
//     .then(() => {
//         console.log('Se ha establecido conexión con la base de datos')
//     })
//     .catch(err => {
//         console.log('No se pudo establecer conexión con la base de datos')
//     })

// module.exports = { connection };

//codigo se usa cuando lo publicamos en servidor
const Sequelize = require('sequelize')
require('dotenv').config();
const { DB_HOST, DB_NAME, DB_PASSWORD, DB_USER } = require('./config.js')


const connection = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
})


connection.authenticate()
    .then(() => {
        console.log('Se ha establecido conexión con la base de datos')
    })
    .catch(err => {
        console.log('No se pudo establecer conexión con la base de datos')
    })


module.exports = { connection };