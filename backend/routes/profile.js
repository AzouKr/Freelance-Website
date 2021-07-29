const router = require("express").Router();
const Profile = require("../model/Profile");
const {
  profileValidation,
} = require("../middlewares/profileValid");
const jwt = require('jsonwebtoken');


// *************************** Profile **************************************

router.post("/profile", async (req, res) => {

    // Validate data
    const { error } = profileValidation(req.body);
    if (error) return res.send({"message" : error , "bool": false});
  
    
    // Create a new Profile
    const profile = new Profile({
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      mobile: req.body.mobile,
      adresse: req.body.adresse,
      date_birth: req.body.date_birth,
      date: req.body.date,
      country: req.body.country,
      region: req.body.region,
      facebook: req.body.facebook,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      website: req.body.website,
      
    });
    try {
      await profile.save();
      res.send("You are successfuly registred");
    } catch (err) {
      res.status(400).send(err);
    }
  });

module.exports = router;
