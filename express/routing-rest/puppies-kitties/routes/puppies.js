const express = require('express');
const router = express.Router();
const puppiesController = require('../controllers/puppies.controller')

router.get('/', puppiesController.getAll);
router.post('/', puppiesController.addOne);
router.get('/:id', puppiesController.getOne);
router.put('/:id', puppiesController.updateOne);
router.delete('/:id', puppiesController.deleteOne);

module.exports = router;