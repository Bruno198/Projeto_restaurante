const express = require("express");
const app = express();

//const path = require("path");

const index = require("http").createServer(app);
const io = require("socket.io")(index);

//app.use(express.static)(path.join)(__dirname , "viws");
const session = require('express-session');
const passport = require('passport');
//require('./auth')(passport);

const bodyParse = require("body-parser");
const db = require("./db");

const ControllerIndex = require("./controller/ControllerIndex");
const ComentariosController = require("./controller/ComentariosController");
const path = require("path");
const { dirname } = require("path");
const { Socket } = require("dgram");
const ProdutosController = require("./controller/ProdutosController");
const PedidosController = require("./controller/PedidosController");
const reserva_messaController = require("./controller/reserva_messaController");


//global.rootPath = __dirname;

app.get("/" , ControllerIndex.restaurante);
app.get("/comentarios" , ComentariosController.comentarios);
app.get("/produtos" , ProdutosController.produtosload);
app.get("/pedidos" , PedidosController.pididosload);
app.get("/reserva_messa" , reserva_messaController.reserva_messa);

app.post("/salvarPedidos" , PedidosController.salvarPedidos);
app.post("/salvarReservas" , reserva_messaController.salvarReservas);

 let mensagems = [];
io.on("connection" , Socket =>{
    console.log(`socket conectado ${Socket.id}`);

    Socket.emit("armazenarMensagemsAnteriores" , mensagems);// aqui eu envio todas mensagems anteriores depois que conectar no socket para ele armazenar as mensagems antigas
    Socket.on("enviar_mensagem" , data => {
        console.log(data);
        mensagems.push(data);
        Socket.broadcast.emit("mensagemglobal" , data);
    });

    if(mensagems.length > 10)
        mensagems.length = 0;
});

const server = index.listen(8080, function () {
    console.log("Running");
    console.log("Chaamou Projeto Restaurante");
});

module.exports = server;
