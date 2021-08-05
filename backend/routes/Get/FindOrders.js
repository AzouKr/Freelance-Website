const router = require("express").Router();
const mongoose = require('mongoose');
const Order = require("../../model/Order");


router.post("/findorder", async (req, res) => {
   await Order.countDocuments({ recemail: req.body.email }, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            res.send((result).toString());
        }
      });
 });

 router.post("/findorderAll", async (req, res) => {
   console.log(req.body.email);
  await Order.find({ recemail: req.body.email }).then((user) => {
      res.send(user);
      console.log(user);
  }).catch((e) => {
      res.send(e);
  })
});

 module.exports = router;
