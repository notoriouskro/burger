var mysql = require("mysql");

var connection;
  
if(process.env.lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com){
  connection = mysql.createConnection(process.env.lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com);
}else {
  mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Steinh0fer",
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