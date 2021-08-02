const router = require("express").Router();
const User = require("../model/User");
const session = require("express-session");
const {
  registerValidation,
  loginValidation,
} = require("../middlewares/Validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// *************************** Register **************************************
router.post("/register", async (req, res) => {
  // Validate data
  const { error } = registerValidation(req.body);
  if (error) return res.send(error.details[0].message);

  // Checking if the user is already in the database
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.send("Email is already exist");

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create a new User
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
    mobile: req.body.mobile,
    adresse: req.body.adresse,
    date_birth: req.body.date_birth,
    date: req.body.date,
    country: req.body.country,
    region: req.body.region,
    skills: req.body.skills,
    education: req.body.education,
    description: req.body.description,
    facebook: req.body.facebook,
    twitter: req.body.twitter,
    instagram: req.body.instagram,
    website: req.body.website,
  });
  try {
    await user.save();
    res.send("You are successfuly registred");
  } catch (err) {
    res.status(400).send(err);
  }
});

// *************************** Login **************************************

router.post("/login", async (req, res) => {
  // Validate data
  const { error } = loginValidation(req.body);
  if (error) return res.send({message: "email is invalid", bool: false});

  // Checking if the email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.send({message: "Email doesn't exist", bool: false});
  // Checking if password correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.send({message: "Invalid password", bool: false});

  // Create and assign a token
  const token = jwt.sign({ _id: user._id }, process.env.Token_Secret);
  res.header("auth-token", token);
  req.session.user = user;
  res.send({message: " ", bool: true});

});

router.get("/login", async (req, res) => {
  if (req.session.user) {
   await res.send({ loggedIn: true, user: req.session.user});
  } else {
    await res.send({ loggedIn: false });
  }
});

router.get('/logout',(req,res) => {
  req.session = null;
  res.send("logout");
});

module.exports = router;
