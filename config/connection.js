/**
 * connection.js
 * 
 * This file connects to the mysql database and exports the connection handle.
 */

var mysql = require('mysql');

require('dotenv').config();

var connection;

if(process.env.JAWSDB_URL){
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
	/* Connection parameters, imported from environment variables */
	connection = mysql.createConnection({
		host: process.env.HOST,
		port: parseInt(process.env.DATABASE_PORT),
		user: process.env.DATABASE_USER,
		password: process.env.DATABASE_PASS,
		database: process.env.DATABASE_NAME
	});
}


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
