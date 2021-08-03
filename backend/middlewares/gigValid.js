const Joi = require('@hapi/joi');

const gigValidation = (data) => {
    const Schema = Joi.object({
      email: Joi.string(),
      title: Joi.string().required(),
      image1: Joi.string(),
      image2: Joi.string(),
      image3: Joi.string(),
      description: Joi.string().required(),
      price: Joi.number().required(),
      type: Joi.string(),
    })
      return Schema.validate(data);
}

module.exports.gigValidation = gigValidation;
