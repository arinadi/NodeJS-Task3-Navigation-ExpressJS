const path = require('path');

const express = require('express');

const mainRoutes = require('./routes/index');
const sysPath = require('./helper/path');

const app = express();

app.use(express.static(path.join(sysPath.root_dir, 'public')));

app.use(mainRoutes);

app.listen(3000);