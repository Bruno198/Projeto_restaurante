const Pedidos = require("../models/Pedidos");
const Produtos = require("../models/Produtos");
let data_vetor = [] , dados_do_vetor = [];
let nome  ;

//let dia, mes, ano;
module.exports = {

    pididosload(req, res) {
        Produtos.findAll().then((dataPedidos) => {
        res.render(__dirname + "/../viws/pedidos.ejs", { nome ,listProdutos : dataPedidos , data_vetor });
        console.log(dataPedidos);
        // lista de obejetos
      //  let listObejetos = [
        //  {
          //  dado : req.body.nome_da_pessoa ,
            //dado2: req.body.preferencias
         // }
       // ]
    //  data_vetor.push(dataPedidos);
      // console.log("O vetor" + data_vetor);
        
        });
    },

    async salvarPedidos (req , res){
  
          data_vetor[0] = req.body.nome_da_pessoa;
          data_vetor[1] = req.body.messa;
          data_vetor[2] = req.body.preferencias;
   
       await Pedidos.create(req.body);
       //conection.query("INSERT into pedidos (preferencias  , nome_da_pessoa , id_pedidos , messa) values (? , ? , ? , ?)");
        console.log("Salvou os Pedidos");
        console.log("O vetor" + data_vetor);
        
       
      //  res.redirect()
    } ,

  }