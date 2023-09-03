const express = require('express');
const router = express.Router();

const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');


router.get('/blogCreate',blogController.create);
router.get('/blogDelete',blogController.delete);
router.get('/blogRead',blogController.read);
router.get('/blogUpdate',blogController.update);


router.get('/blogDetailsCreate',blogDetailsController.create);
router.get('/blogDetailsDelete',blogDetailsController.delete);
router.get('/blogDetailsRead',blogDetailsController.read);
router.get('/blogDetailsUpdate',blogDetailsController.update);


router.get('/commentCreate',commentController.create);
router.get('/commentDelete',commentController.delete);
router.get('/commentRead',commentController.read);
router.get('/commentUpdate',commentController.update);


router.get('/messageCreate',messageController.create);
router.get('/messageDelete',messageController.delete);
router.get('/messageRead',messageController.read);
router.get('/messageUpdate',messageController.update);


router.get('/portfolioCreate',portfolioController.create);
router.get('/portfolioDelete',portfolioController.delete);
router.get('/portfolioRead',portfolioController.read);
router.get('/portfolioUpdate',portfolioController.update);


router.get('/productCreate',productController.create);
router.get('/productDelete',productController.delete);
router.get('/productRead',productController.read);
router.get('/productUpdate',productController.update);


router.get('/profitCreate',profitController.create);
router.get('/profitDelete',profitController.delete);
router.get('/profitRead',profitController.read);
router.get('/profitUpdate',profitController.update);


router.get('/projectCreate',projectController.create);
router.get('/projectDelete',projectController.delete);
router.get('/projectRead',projectController.read);
router.get('/projectUpdate',projectController.update);


router.get('/serviceCreate',serviceController.create);
router.get('/serviceDelete',serviceController.delete);
router.get('/serviceRead',serviceController.read);
router.get('/serviceUpdate',serviceController.update);


router.get('/titleCreate',titleController.create);
router.get('/titleDelete',titleController.delete);
router.get('/titleRead',titleController.read);
router.get('/titleUpdate',titleController.update);


module.exports = router;