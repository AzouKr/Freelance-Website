const router = require("express").Router();
const verify = require('../middlewares/verifyToken');



router.get('/private', verify, (req, res) => {
    res.send(true);
});

module.exports = router;
 