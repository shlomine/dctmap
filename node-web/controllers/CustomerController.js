/*
 * dependencies
 */
var config = require('../../config/config.js'),
dbactions = require('../../modules/dbactions.js'),
logging = require('../../modules/logging.js');

var mongoose = require("mongoose");
var MongoClient = require('mongodb').MongoClient;
var Customer = require("../models/Customer");

var customerController = {};

// show list of customers function.
customerController.list = function(req, res) {
  Customer.find({}).exec(function (err, customers) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/customers/index", {customers: customers});
    }
  });
};

// show single customer by id function.
customerController.show = function(req, res) {
  Customer.findOne({_id: req.params.id}).exec(function (err, customer) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/customers/show", {customer: customer});
    }
  });
};

// create customer function, it just redirects to create the page.
customerController.create = function(req, res) {
  res.render("../views/customers/create");
};

// save new customer function.
customerController.save = function(req, res) {
  var customer = new Customer(req.body);
  customer.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/customers/create");
    } else {
      console.log("Successfully created an customer.");
      res.redirect("/customers/show/"+customer._id);
    }
  });
};

// edit customer by id function, it just redirects to edit page.
customerController.edit = function(req, res) {
  Customer.findOne({_id: req.params.id}).exec(function (err, customer) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/customers/edit", {customer: customer});
    }
  });
};

// update customer function for updating currently edited customer.
customerController.update = function(req, res) {
  Customer.findByIdAndUpdate(req.params.id, { $set: { cName: req.body.cName, cLocation: req.body.cLocation, cProjM: req.body.cProjM, cTechM: req.body.cTechM, cStartDate: req.body.cStartDate, cStatus: req.body.cStatus }}, { new: true, 'useFindAndModify': false }, function (err, customer) {
    if (err) {
      console.log(err);
      res.render("../views/customers/edit", {customer: req.body});
    }
    res.redirect("/customers/show/"+customer._id);
  });
};

// delete customer by id function for remove single customer data.
customerController.delete = function(req, res) {
  Customer.deleteMany({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Customer deleted!");
      res.redirect("/customers");
    }
  });
};

// export customer controller as a module.
module.exports = customerController;
