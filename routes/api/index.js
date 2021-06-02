const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const User = require('../../models/User.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;