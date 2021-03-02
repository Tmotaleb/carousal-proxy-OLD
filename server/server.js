const express = require('express');
const morgan = require('morgan');
const path = require('path');
const router = require('./router');

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public')

// Create express server
const app = express();

// Logging
app.use(morgan('dev'));
app.use(express.static(PUBLIC_DIR));

// Handle asset request for webpack bundles by forwarding request to the bundles router
app.use('/bundles', router.bundles);

// Handle AJAX request to the API by forwarding requests to the api router
app.use('/api', router.api);

module.exports = app;