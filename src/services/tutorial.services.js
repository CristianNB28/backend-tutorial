const boom = require('@hapi/boom');
const { initModels } = require("../models/init-models");
const mysql = require('../../config/db/mysql');
const tutorialModel = initModels(mysql).tutorial;
const Op = mysql.Sequelize.Op;

module.exports = {
/*                 GET                */
  findAll: async (title) => {
    let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
    const tutorials = await tutorialModel.findAll({
      where: condition
    });
    return tutorials;
  },
  findOne: async (id) => {
    const tutorial = await tutorialModel.findByPk(id);
    if (tutorial === null) {
      throw boom.notFound('Tutorial Not Found');
    }
    return tutorial;
  },
  findAllPublished: async() => {
    const tutorialsPublished = tutorialModel.findAll({
        where: {
          published: true
        }
    });
    return tutorialsPublished;
  },
/*                 POST                */
  create: async (data) => {
    const newProduct = await tutorialModel.create(data);
    return newProduct;
  },
/*                 PATCH                */
  update: async (id, changes) => {
    const tutorial = await tutorialModel.update(changes,
      {
        where: {
          id : id
        }
      }
    );
    if (tutorial[0] === 0) {
      throw boom.notFound('Tutorial Not Found');
    }
    return tutorial;
  },
/*                 DELETE                */
  deleteTrash: async (id) => {
    const tutorial = await tutorialModel.destroy({
      where: {
        id: id
      }
    });
    if (tutorial === 0) {
      throw boom.notFound('Tutorial Not Found');
    }
    return { id };
  },
  deleteTrashAll: async () => {
    const tutorials = tutorialModel.destroy({
      where: {},
      truncate: false
    });
    return tutorials;
  }
}
