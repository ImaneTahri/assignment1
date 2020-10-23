var express = require('express');
var router = express.Router();

//index controller
let indexController = require('../controllers/index')

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home',  indexController.displayHomePage);

/* GET home page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET home page. */
router.get('/services', indexController.displayServicesPage);

/* GET home page. */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
