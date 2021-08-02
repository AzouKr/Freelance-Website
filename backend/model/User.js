const mongoose = require('mongoose');

const UserSchema = new  mongoose.Schema({
    username:{
      type: String,
      required: true,
    },
    email:{
      type: String,
      required: true,
      min:6,
    },
    password:{
      type: String,
      required: true,
      min:6,
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
  skills:{
      type: String,
      required: true,
  },
  education:{
      type: String,
      required: true,
  },
  description:{
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

module.exports = mongoose.model('User', UserSchema);