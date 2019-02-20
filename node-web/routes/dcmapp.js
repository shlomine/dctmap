var express = require('express');
var router = express.Router();

// Add require that point to Customer controller.
var dcmapp = require("../controllers/DcmapperController.js");

// add all routes to CRUD functions like below.
// Get all customers
router.get('/', dcmapp.list);

// Get single customer by id
router.get('/show/:id', dcmapp.show);

// Create customer
router.get('/create', dcmapp.create);

// Save customer
router.post('/save', dcmapp.save);

// Edit customer
router.get('/edit/:id', dcmapp.edit);

// Edit update
router.post('/update/:id', dcmapp.update);

// Edit update
router.post('/delete/:id', dcmapp.delete);

// export router as a module.
module.exports = router;
