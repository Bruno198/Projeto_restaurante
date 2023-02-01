const Produtos = require("../models/Produtos");

module.exports = {
    adicionar(req , res){
        Produtos.findAll().then((dataadicionarproduto) =>{
            res.render(__dirname + "/../viws/adicionarproduto.ejs", { listAdicionar : dataadicionarproduto});
      
        });
    } ,   

    async salvarAdicionar (req , res){

     await Produtos.create(req.body);
      console.log("Salvou os Produto Adicionado");
      res.redirect("/adiministrador");
  } ,
    
    } 