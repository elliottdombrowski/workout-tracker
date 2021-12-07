const router = require('express').Router();

const apiRoutes = require('./api.js');
router.use('/', apiRoutes);

module.exports = router;