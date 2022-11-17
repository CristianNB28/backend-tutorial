require('dotenv').config();
const express = require('express');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./src/routes/index.routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler
} = require('./src/middlewares/error.handler');

app.use(cors());

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1', router);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

module.exports = app;
