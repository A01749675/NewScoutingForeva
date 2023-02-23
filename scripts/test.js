

function connect(){
    var mysql = require('mysql2');
    const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Caikfure3472",
    database: "Scouting"
  });
}

var access = false;

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM matches", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

function log_in(user,password){
  connect();
  con.connect(function(err){
    if (err) throw err;
    con.query("SELECT user,password FROM scouters" ,function (err,result,fields) {
      if(err) throw err;
      console.log(result);
      if (result["user"]==user && result["password"]==password){
          access=true
      }
  });
  

});
}

