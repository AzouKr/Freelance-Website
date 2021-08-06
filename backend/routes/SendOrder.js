const router = require("express").Router();
const orderValidation = require("../middlewares/orderValid");
const Order = require("../model/Order");





// *************************** Send Email **************************************
router.post("/sendOrder", async (req, res) => {

    // Validate data
//   const { error } = orderValidation(req.body);
//   if (error) return res.send({message: error.details[0].message, bool: false});

//   console.log(error.details[0].message);


    // Create a new Order
  const order = new Order({
    sendemail: req.body.sendemail,
    recemail: req.body.recemail,
    subject: req.body.subject,
    description: req.body.description,
    username: req.body.username,
    image: req.body.image,
  });
  try {
    await order.save();
    res.send({message: "You'r order is sent", bool: true});
    console.log("You'r order is sent");
  } catch (err) {
    res.status(400).send(err);
  }

});




module.exports = router;
