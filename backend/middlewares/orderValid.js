const Joi = require('@hapi/joi');

const orderValidation = (data) => {
    const Schema = Joi.object({
      sendemail: Joi.string().required(),
      recemail: Joi.string().required(),
      subject: Joi.string().required(),
      description: Joi.string().required(),      
    })
      return Schema.validate(data);
}

module.exports.orderValidation = orderValidation;
