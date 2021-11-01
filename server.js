const express = require('express');

const apiRoutes = require('./routes/api.routes');
const pageRoutes = require('./routes/page.routes');

// initialize server
const app = express();
const PORT = process.env.PORT || 8080;

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// set up routing
app.use('/api', apiRoutes);
app.use('/', pageRoutes);

// spin up server
app.listen(PORT, () => console.log(`Express server running on port ${PORT}`));
