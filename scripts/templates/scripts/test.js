



function connect(){
    var mysql = require('mysql2');
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Caikfure3472",
        database: "Scouting"
      });
    return con
}


function log_in(user,password){
    var mysql = require('mysql2');
    con =connect();
    con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT user,password FROM scouters WHERE user = "+mysql.escape(user), function (err, result, fields) {
            if (err) throw err;
            console.log(result);
            
            if(user==result[0].user && password==result[0].password){
                console.log("access")
            }
        });
      });

}
log_in("scout","root")