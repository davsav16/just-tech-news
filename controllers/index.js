const router = require('express').Router();
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dasboard-routes.js');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
