// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {
    
  });

  // Add a chirp
app.post("/api/new", function(req, res) {

    console.log("Chirp Data:");
    console.log(req.body);
});


};
