
//let dia, mes, ano;
//const Pedidos = require("../models/Pedidos");
//let pedi_por , messa , prefereencias;
//let salvouPedidos = 0;

module.exports = {

  restaurante(req, res) {
    res.render(__dirname + "/../viws/index.ejs", {});
     // res.render(__dirname + "/../viws/index.ejs", {pedi_por , messa , prefereencias , salvouPedidos});

  },
/*
  async salvarPedidos (req , res){
    pedi_por = req.body.nome_da_pessoa;
    messa = req.body.messa;
    prefereencias = req.body.preferencias;
       await Pedidos.create(req.body);
       //conection.query("INSERT into pedidos (preferencias  , nome_da_pessoa , id_pedidos , messa) values (? , ? , ? , ?)");
        console.log("Salvou os Pedidos");
        salvouPedidos = 1;

       res.redirect("/");
    } ,
*/
}