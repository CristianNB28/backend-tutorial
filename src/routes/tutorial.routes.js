const express =  require('express');
const router = express.Router();

const tutorialController = require('../controllers/tutorial.controllers');
const validatorHandler = require('../middlewares/validator.handler');
const {
  getTutorialSchema,
  createTutorialSchema,
  updateTutorialSchema
} = require('../schemas/tutorial.schema');

router.post('/',
  validatorHandler(createTutorialSchema, 'body'),
  tutorialController.postCreate
);
router.get('/', tutorialController.getFindAll);
router.get('/published', tutorialController.getFindAllPublished);
router.get('/:id',
  validatorHandler(getTutorialSchema, 'params'),
  tutorialController.getFindOne
);
router.patch('/:id',
  validatorHandler(getTutorialSchema, 'params'),
  validatorHandler(updateTutorialSchema, 'body'),
  tutorialController.patchUpdate
);
router.delete('/:id',
  validatorHandler(getTutorialSchema, 'params'),
  tutorialController.deleteTrash
);
router.delete('/', tutorialController.deleteTrashAll);

module.exports = router;
