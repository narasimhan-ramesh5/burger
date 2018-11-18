/**
 * burger.js
 * 
 * This file implements the 'Model' part of the MVC application.
 */

 var orm = require('../config/orm');

 var burger = {
	 getAllBurgers : function(cb){
		 orm.selectAll("burgers", function(result){
			 cb(result);
		 });
	 },

	 devour : function(id, cb){
		 orm.updateOne("burgers", "devoured", true, "id", id, function(result){
			 cb(result);
		 });
	 },

	 addBurger : function(newBurger, cb){
		 orm.insertOne("burgers", newBurger, function(result){
			 cb(result);
		 });
	 } 

 };

 module.exports = burger;