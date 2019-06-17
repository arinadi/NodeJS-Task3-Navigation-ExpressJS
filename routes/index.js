const path = require('path');

const express = require('express');

const router = express.Router();
const sysPath = require('../helper/path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(sysPath.path_views, 'index.html'));
});

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(sysPath.path_views, 'users.html'));
});

module.exports = router;