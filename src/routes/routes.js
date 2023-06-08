const express = require('express');
const router = new express.Router;
const controller = require('../../middleware/controller');

/**
 * defining the routes
 */
router.get('/students', controller.getStudentsFunc);
router.get('/students/:id', controller.getStudentsByIdFunc)

module.exports = router;