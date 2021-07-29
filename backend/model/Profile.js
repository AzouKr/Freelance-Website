const mongoose = require('mongoose');

const ProfileSchema = new  mongoose.Schema({
    email:{
        type: String,
      },
    name:{
      type: String,
      required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    mobile:{
        type: Number,
        required: true,
    },
    adresse:{
        type: String,
        required: true,
    },
    date_birth:{
        type: Date,
        required: true,
    },
    Date:{
        type: Date,
        default: Date.now,
    },
    country:{
        type: String,
        required: true,
    },
    region:{
        type: String,
        required: true,
    },
    facebook:{
        type: String,
        default: "null",
    },
    twitter:{
        type: String,
        default: "null",
    },
    instagram:{
        type: String,
        default: "null",
    },
    website:{
        type: String,
        default: "null",
    },
  });

module.exports = mongoose.model('Profile', ProfileSchema);