const router = require("express").Router();
const User = require("../../model/User");


 router.post("/finduser", async (req, res) => {
  await User.find({ email: req.body.email }).then((user) => {
      res.send(user);
  }).catch((e) => {
      res.send(e);
  })
});

 module.exports = router;
