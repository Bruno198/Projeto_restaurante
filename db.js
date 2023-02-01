//const { Client } = require('pg');
//const client = require("pg").Client;
const Sequelize = require("sequelize");
const config = require("./config/relationalDb");
/*
const clientepostegres  =  new client ({
    dialect: 'postgres',
    host: "localhost",
    username: "postgres",
    password: "postgres",
    database: 'restaurante',
    port: 5432,
    define: {
        underscored: true,
    }

})

clientepostegres .connect();
*/


const Restaurante = require("./models/restaurante");
const Produtos = require("./models/Produtos");
const Pedidos = require("./models/Pedidos");
const reserva_messa = require("./models/Reserva_messa");
const User = require("./models/User");
/*
const client = postegresCliente.connect(uri, {useUnifiedTopology: true }, (error, connection) => {
    if (error) {
        console.log("falha na conexão");
        return;
    }
    global.connection = connection.db("restaurante");
    console.log("conectou!");
});

clientepostegres.query("select * from pedidos")
     .then(results => {
         const result = results.rows
         console.log(result)
     })
     .finally(() => clientepostegres.end())

*/ 
const connection = new Sequelize(config);

Restaurante.init(connection);

Produtos.init(connection);

Pedidos.init(connection);

reserva_messa.init(connection);

Produtos.associate(connection.models);

Pedidos.associate(connection.models);

reserva_messa.associate(connection.models);

User.init(connection);



module.exports = {}; 