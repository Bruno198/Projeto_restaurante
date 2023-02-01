const user = require("../models/User");
const bcrypt = require('bcryptjs');
const { use } = require("passport");
let variavelnome , nomeuser;
module.exports = {

    async savelogin(req , res){
      req.body.paseword =  bcrypt.hashSync(req.body.paseword);
        await user.create(req.body);
        console.log("Salvou Cadastro");

        res.redirect("/login");
    } ,

      loadUsuario(req, res , element) {

     variavelnome = req.user.nome;
      
       res.render(__dirname + "/../viws/adiministrativo.ejs", {variavelnome});
    //console.log("Pegou nome do Usuario "+variavelnome);
       
    
    }
  }