const express = require('express');
const usersController = require('../controllers/users');
const vendorController = require('../controllers/vendors');
const router = express.Router();

router.get('/:firebase_id', vendorController.getVendorById);
router.post('/register', vendorController.addVendor);
router.post('/addVendor', vendorController.addVendor);
router.put('/:firebase_id', vendorController.updateVendor);
router.delete('/:id', vendorController.deleteVendor);

module.exports = router