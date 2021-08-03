const Joi = require('@hapi/joi');

const gigValidation = (data) => {
    const Schema = Joi.object({
      email: Joi.string().required(),
      title: Joi.string().required(),
      image1: Joi.string().required(),
      image2: Joi.string().required(),
      image3: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      type: Joi.string().required(),
    })
      return Schema.validate(data);
}

module.exports.gigValidation = gigValidation;
