module.exports = {

login(req, res) {
 
  mensagem = req.query.fail;
  if(req.query.fail)
  res.render(__dirname + "/../viws/login.ejs" , { msg :"Senha ou Login Incoreto"});
  
  else
    res.render(__dirname + "/../viws/login.ejs", { msg : null});
  
},
}