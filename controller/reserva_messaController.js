const reserva_messa = require("../models/Reserva_messa");


module.exports = {
reserva_messa(req , res){
 
        res.render(__dirname + "/../viws/reserva_messa.ejs", {});
  
  
} ,

async salvarReservas (req , res){

    //await reserva_messa.create(req.body);
    //const query = "INSERT into reserva_messas (nome_do_reservante , messa_para_ser_reservada) values(? , ?)";

    console.log("Salvou os Reservas");

    res.redirect("/");
}

} 
        
    

   

  
  