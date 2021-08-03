const mongoose = require('mongoose');

const GigsSchema = new  mongoose.Schema({
  email:{
    type: String,
  },
    title:{
      type: String,
      required: true,
    },
    image1:{
      type: String,
    },
    image2:{
        type: String,
      },
      image3:{
        type: String,
      },
    description:{
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    type:{
      type: String,
    },
  });

module.exports = mongoose.model('Gigs', GigsSchema);