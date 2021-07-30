const router = require("express").Router();
const mongoose = require('mongoose');
const Gigs = require("../../model/Gigs");
const Profile = require("../../model/Profile");
const User = require("../../model/User");





// *************************** Profile **************************************

router.get("/allgigs", async (req, res) => {
   await Gigs.find({}).then((gigs) => {
        res.send(gigs);
    }).catch((e) => {
        res.send(e);
    })
});


router.post("/username", async (req, res) => {
    await User.find({ email: req.body.email }).then((user) => {
        res.send(user[0].name);
    }).catch((e) => {
        res.send(e);
    })
    
});

router.post("/profileinfo", async (req, res) => {
    await Profile.find({ email: req.body.email }).then((user) => {
        res.send(user[0]);
    }).catch((e) => {
        res.send(e);
    })
});

router.post("/profilegig", async (req, res) => {
    await Gigs.find({ email: req.body.email }).then((user) => {
        res.send(user);
    }).catch((e) => {
        res.send(e);
    })
});

module.exports = router;
