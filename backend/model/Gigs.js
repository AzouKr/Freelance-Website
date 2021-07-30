const mongoose = require('mongoose');

const GigsSchema = new  mongoose.Schema({
  email:{
    type: String,
    required: true,
  },
    title:{
      type: String,
      required: true,
    },
    image1:{
      type: String,
      required: true,
    },
    image2:{
        type: String,
        required: true,
      },
      image3:{
        type: String,
        required: true,
      },
    description:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
  });

module.exports = mongoose.model('Gigs', GigsSchema);