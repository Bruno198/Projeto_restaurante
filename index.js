const express = require("express");
const app = express();

//  const path = require("path");

const index = require("http").createServer(app);
const io = require("socket.io")(index);
const session = require('express-session');
const passport = require('passport');
require('./auth')(passport);
//app.use(express.static)(path.join)(__dirname , "viws");


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
const LoginController = require("./controller/LoginController");
const renderizaloginController = require("./controller/renderizaloginController");
const AdiministrativoController = require("./controller/AdiministrativoController");
const AdicionarProdutoController = require("./controller/AdicionarProdutoController");


global.rootPath = __dirname;

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.use(session({
    secret: 'nosso-segredo',
    cookie: { maxAge: 1 * 60 * 1000 },
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');
app.use(express.static('public'));

authenticationMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    //se estiver autenticado vai para as rotas de adimin
    else{
        res.redirect('/login');
      
    }
  // se n estiver autenticado n acessa nada do admin
    //aqui verifica se ele está autenticado
}

//app.get("/login", LoginController.loadLogin);
app.post("/login", passport.authenticate('local', {
    successRedirect: '/adiministrativo',
    failureRedirect: '/login?fail=true'
}));


app.get("/logout", (req, res) => {
    req.logOut((err) => { console.log(err); });
    res.redirect('/');
});

app.get("/" , ControllerIndex.restaurante);

app.get("/produtos" , ProdutosController.produtosload);
app.get("/pedidos" , PedidosController.pididosload);
app.get("/comentarios" , ComentariosController.comentarios);
app.get("/reserva_messa" , reserva_messaController.reserva_messa);
app.get("/login" , renderizaloginController.login); 
//app.get("/adiministrativo" ,AdiministrativoController.AdiminitratiloLoad);
app.get("/adiministrativo" , authenticationMiddleware,LoginController.loadUsuario); 
app.get("/adicionarproduto" , AdicionarProdutoController.adicionar); 


app.post("/salvarPedidos" , PedidosController.salvarPedidos);
app.post("/salvarReservas" , reserva_messaController.salvarReservas);
app.post("/savelogin" , LoginController.savelogin);
app.post("/salvarAdicionar" , AdicionarProdutoController.salvarAdicionar);

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
