const router = require("express").Router();
const Gig = require("../model/Gigs");
const {
  gigValidation,
} = require("../middlewares/gigValid");
const jwt = require('jsonwebtoken');


// *************************** Gig **************************************

router.post("/Creategig", async (req, res) => {

    // Validate data
    const { error } = gigValidation(req.body);
    if (error) return res.send(error);
  
    
    // Create a new Profile
    const gig = new Gig({
      email: req.body.email,
      title: req.body.title,
      image1: req.body.image1,
      image2: req.body.image2,
      image3: req.body.image3,
      description: req.body.description,
      price: req.body.price,
    });
    try {
      await gig.save();
      res.send("gig is successfuly registred");
    } catch (err) {
      res.status(400).send(err);
    }
  });

module.exports = router;
