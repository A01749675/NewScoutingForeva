var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Caikfure3472",
  database: "Scouting"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT user,password FROM scouters", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});