const router = require('express').Router();

const apiRoutes = require('./api.js');
//im really just trying to test this.
router.use('/', apiRoutes);

module.exports = router;