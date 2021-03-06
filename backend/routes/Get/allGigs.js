const router = require("express").Router();
const mongoose = require('mongoose');
const Gigs = require("../../model/Gigs");
const User = require("../../model/User");





// *************************** Profile **************************************

router.get("/allgigs", async (req, res) => {
   await Gigs.find({}).then((gigs) => {
        res.send(gigs);
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

router.post("/typegig", async (req, res) => {
    await Gigs.find({ type: req.body.type }).then((user) => {
        res.send(user);
    }).catch((e) => {
        res.send(e);
    })
});

module.exports = router;
