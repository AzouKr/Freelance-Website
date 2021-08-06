const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  sendemail: {
    type: String,
    required: true,
  },
  recemail: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
 
});

module.exports = mongoose.model("Order", OrderSchema);
