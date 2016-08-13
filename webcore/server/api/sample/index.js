'use strict';

var express = require('express');
var router = express.Router();
var controller = require('./sample.controller');

router.post('/', controller.create);
router.get('/:id', controller.show);
router.get('/',  controller.index);
router.put('/:id', controller.update);
router.delete('/:id',  controller.destroy);

module.exports = router;
