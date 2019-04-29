var mysql = require("mysql");

var connection;
  
if(process.env.u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com){
  connection = mysql.createConnection(process.env.u28rhuskh0x5paau.cbetxkdyhwsb.us-east-1.rds.amazonaws.com);
}else {
  mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db"
  });
};

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
  
    console.log("connected as id " + connection.threadId);
  });

  // Export connection for our ORM to use.
module.exports = connection;