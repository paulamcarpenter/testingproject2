// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var church = {
  all: function(cb) {
    orm.all("churches", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("churches", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("churches", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (churchesController.js).
module.exports = church;






// // =============================================================
// // Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// var sequelize = require("../config/connection.js");
// // Creates a "Book" model that matches up with DB
// var Church = sequelize.define("church", {
//   title: {
//     type: Sequelize.STRING
//   },
//   author: {
//     type: Sequelize.STRING
//   },
//   genre: {
//     type: Sequelize.STRING
//   },node
//   pages: {
//     type: Sequelize.INTEGER
//   }
// }, {
//   timestamps: false
// });
// // Syncs with DB
// Book.sync();
// // Makes the Book Model available for other files (will also create a table)
// module.exports = Book;