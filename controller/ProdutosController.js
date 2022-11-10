const Produtos = require("../models/Produtos");

module.exports = {
produtosload(req , res){
    Produtos.findAll().then((data) =>{
        res.render(__dirname + "/../viws/produtos.ejs", { listProdutos : data});
  
    });
} ,   

} 
        
    

   

  
  