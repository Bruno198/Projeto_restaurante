const Pedidos = require("../models/Pedidos");
const Produtos = require("../models/Produtos");


//let dia, mes, ano;
module.exports = {

    pididosload(req, res) {
        Produtos.findAll().then((dataPedidos) => {
        res.render(__dirname + "/../viws/pedidos.ejs", { listProdutos : dataPedidos});
        console.log(dataPedidos)
        });
    },

    async salvarPedidos (req , res){
    
       await Pedidos.create(req.body);
       //conection.query("INSERT into pedidos (preferencias  , nome_da_pessoa , id_pedidos , messa) values (? , ? , ? , ?)");
        console.log("Salvou os Pedidos");
        

      //  res.redirect()
    } ,
  
  }