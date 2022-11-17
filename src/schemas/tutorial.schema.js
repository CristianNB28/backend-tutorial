const Joi = require('joi');

const id = Joi.string();
const title = Joi.string().min(3).max(16);
const description = Joi.string().min(10).max(150);
const published = Joi.boolean();

const createTutorialSchema = Joi.object({
  title: title.required(),
  description: description.required(),
  published: published.required()
});

const updateTutorialSchema = Joi.object({
  title: title,
  description: description,
  published: published
});

const getTutorialSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createTutorialSchema,
  updateTutorialSchema,
  getTutorialSchema
}
