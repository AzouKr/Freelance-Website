const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const Schema = Joi.object({
      username: Joi.string().required(),
      email: Joi.string().required().email(),
      password: Joi.string().required(),
      mobile: Joi.number().required(),
      adresse: Joi.string().required(),
      date_birth: Joi.date().required(),
      date: Joi.date().required(),
      country: Joi.string().required(),
      region: Joi.string().required(),
      facebook: Joi.string().required(),
      twitter: Joi.string().required(),
      instagram: Joi.string().required(),
      website: Joi.string().required(),
    })
      return Schema.validate(data);
}

const loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required()
  })
      return Schema.validate(data);
}


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;