var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var church = require("../models/church.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  church.all(function(data) {
    var hbsObject = {
      churches: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/churches", function(req, res) {
  church.create(["name", "sleepy"], [req.body.name, req.body.sleepy], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/churches/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  church.update(
    {
      sleepy: req.body.sleepy
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;
