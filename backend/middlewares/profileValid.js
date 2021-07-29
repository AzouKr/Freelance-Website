const Joi = require('@hapi/joi');

const profileValidation = (data) => {
    const Schema = Joi.object({
      email: Joi.string(),
      name: Joi.string().required(),
      surname: Joi.string().required(),
      mobile: Joi.number().required(),
      adresse: Joi.string().required(),
      date_birth: Joi.date().required(),
      country: Joi.string().required(),
      region: Joi.string().required(),
      facebook: Joi.string().required(),
      twitter: Joi.string().required(),
      instagram: Joi.string().required(),
      website: Joi.string().required(),
    })
      return Schema.validate(data);
}

module.exports.profileValidation = profileValidation;
