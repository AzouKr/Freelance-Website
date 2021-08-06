const router = require("express").Router();
const mongoose = require('mongoose');
const Order = require("../../model/Order");


router.post("/findorder", async (req, res) => {
  const email = req.body.email;
   await Order.countDocuments({ recemail: email }).then((user) => {
    res.send((user).toString());
}).catch((e) => {
    res.send(e);
})
 });

 router.post("/findorderAll", async (req, res) => {
  await Order.find({ recemail: req.body.email }).then((user) => {
      res.send(user);
  }).catch((e) => {
      res.send(e);
  })
});

 module.exports = router;
