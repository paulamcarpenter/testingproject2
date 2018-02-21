// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "root",
  database: "church_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Link to Google Maps API:
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 33.448376, lng: -112.074036},
    zoom: 5
  });
}

// Export connection for our ORM to use.
module.exports = connection;


// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************
// Dependencies
// var Sequelize = require("sequelize");
// // Creates mySQL connection using Sequelize
// var sequelize = new Sequelize("church_db", "root", "root", {
//   host: "localhost",
//   dialect: "mysql",
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });
// // Exports the connection for other files to use
// module.exports = sequelize;