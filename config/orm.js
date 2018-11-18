/**
 * orm.js
 * 
 * Implements the Object-Relational Mapping.
 */

/* Import connection */
var connection = require('./connection');

var orm = {
	selectAll:function(tableName, cb){
		var queryString = 'SELECT * FROM ??';
		var queryParams = [tableName];
		connection.query(queryString, queryParams, function(err, result){
			if(err) throw err;

			console.log(result);
			cb(result);
		});
	},

	insertOne:function(tableName, newEntry, cb){
	
		if(!tableName || !newEntry){
			console.log("error - table name or new entry not specified correctly");
			return false;
		}

		var queryString = 'INSERT into ?? SET ?';
		var queryParams = [tableName, newEntry];

		connection.query(queryString, queryParams, function (err, result){
			if(err) throw err;

			console.log(result);
			cb(result);
		});
	},

	updateOne:function(tableName, columnToUpdate, updatedValue, searchKey, searchVal, cb){
		var queryString = 'UPDATE ?? set ??=? WHERE ??=?';
		var queryParams = [tableName, columnToUpdate, updatedValue, searchKey, searchVal];
		connection.query(queryString, queryParams, function(err, results){
			if(err) throw err;

			if(results.changedRows != 1){
				console.log("Unexpected error - only one row should have been updated."
				+ "However, it appears " + results.changedRows + " rows were updated");
			}
			cb(results);
		})
	},

	closeConnection:function(){
		connection.end();
	}
};

module.exports = orm;
