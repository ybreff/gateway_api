module.exports = app => {
    const gateways = require("../controllers/gateway.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Gateway
    router.post("/", gateways.create);
  
    // Retrieve all Gateways
    router.get("/", gateways.findAll);
    
    // Retrieve a single Gateway with id
    router.get("/:id", gateways.findOne);
  
    // Update a Gateway with id
    router.put("/:id", gateways.update);
  
    // Delete a Gateway with id
    router.delete("/:id", gateways.delete);  
  
    app.use('/api/gateways', router);
  };