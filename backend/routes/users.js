const express = require("express");
const router = express.router();

router.get("/", function(rew, res, next){

    res.send("hola u just routed");
});

module.exports = router;