
const Sequelize = require("sequelize");
const config = require("./config/relationalDb");
const Restaurante = require("./models/restaurante");
const Produtos = require("./models/Produtos");
const Pedidos = require("./models/Pedidos");
const Pedreserva_messaidos = require("./models/Reserva_messa");

const connection = new Sequelize(config);

Restaurante.init(connection);

Produtos.init(connection);

Pedidos.init(connection);

Pedreserva_messaidos.init(connection);

Produtos.associate(connection.models);

Pedidos.associate(connection.models);

Pedreserva_messaidos.associate(connection.models);



module.exports = {}; 