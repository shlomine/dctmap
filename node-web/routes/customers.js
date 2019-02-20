var express = require('express');
var router = express.Router();

// Add require that point to Customer controller.
var customer = require("../controllers/CustomerController.js");

// add all routes to CRUD functions like below.
// Get all customers
router.get('/', customer.list);

// Get single customer by id
router.get('/show/:id', customer.show);

// Create customer
router.get('/create', customer.create);

// Save customer
router.post('/save', customer.save);

// Edit customer
router.get('/edit/:id', customer.edit);

// Edit update
router.post('/update/:id', customer.update);

// Edit update
router.post('/delete/:id', customer.delete);

// export router as a module.
module.exports = router;
