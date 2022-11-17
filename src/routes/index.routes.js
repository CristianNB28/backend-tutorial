const express = require('express');
const router = express.Router();

// Rutas Externas
const tutorialRouter = require('../routes/tutorial.routes');

// Rutas
router.use('/tutorials', tutorialRouter);

module.exports = router;
