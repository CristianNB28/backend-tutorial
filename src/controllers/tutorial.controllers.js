const {
  findAll,
  findOne,
  findAllPublished,
  create,
  update,
  deleteTrash,
  deleteTrashAll
} = require('../services/tutorial.services');

module.exports = {
/*                 GET                */
  getFindAll: async (req, res, next) => {
    try {
      const title = req.query.title;
      const tutorials = await findAll(title);
      res.send(tutorials);
    } catch (error) {
      next(error);
    }
  },
  getFindOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const tutorial = await findOne(id);
      res.send(tutorial);
    } catch (error) {
      next(error);
    }
  },
  getFindAllPublished: async (req, res, next) => {
    try {
      const tutorials = await findAllPublished();
      res.send(tutorials);
    } catch (error) {
      next(error);
    }
  },
/*                 POST                */
  postCreate: async (req, res) => {
    const body = req.body;
    const newTutorial = await create(body);
    res.send(newTutorial);
  },
/*                 PATCH                */
  patchUpdate: async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      await update(id, body);
      res.send({
        message: "El tutorial se actualizó con éxito"
      });
    } catch (error) {
      next(error);
    }
  },
/*                 DELETE                */
  deleteTrash: async(req, res, next) => {
    try {
      const { id } = req.params;
      const tutorial = await deleteTrash(id);
      res.json(tutorial);
    } catch (error) {
      next(error);
    }
  },
  deleteTrashAll: async(req, res, next) => {
    try {
      const tutorials = await deleteTrashAll();
      res.json(tutorials);
    } catch (error) {
      next(error);
    }
  },
}
