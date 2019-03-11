var express = require("express");
var router = express.Router();
var models = require("../models"); 


//..........................................................

router.get("/", function(req, res) {
  res.redirect("/index");
});

//GET route 'findAll' to get all burgers from database.
router.get('/index', function(req, res){
  models.burger.findAll({})
  .then(function(data) {
    var hbsObject = 
    {
      burgers: data
    }; 
    res.render("index", hbsObject);
  });
});


// Create a New Burger
router.post('/', function (req, res) {
  models.burger.create(
    {
      burger_name: req.body.burger_name,            
    })
    .then (function() {
    res.redirect("/index");
  }); 
});


//Devour a burger
router.post('/:id', function(req, res) { 
  models.burger.update(
    {
      devoured: req.body.devoured,  
    },
    {
      where: {id: req.params.id} 
    })
    .then(function() {
    res.redirect("/index");
  });
});
   


// Export routes for server.js to use.......................
module.exports = router;