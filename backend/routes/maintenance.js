const express = require('express');
const router = express.Router();
const MaintenanceController = require('../routes/controllers/MaintenanceController');
const express = require('express');

router.get('/', MaintenanceController.getAll);
router.get('/:id', MaintenanceController.getById);
router.post('/', MaintenanceController.create);
router.put('/', MaintenanceController.update);
router.delete('/:id', MaintenanceController.delete);

module.exports = router;
