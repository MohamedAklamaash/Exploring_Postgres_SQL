const express = require("express");
const { check } = require("../controllers/yelp_v1_controller");
const router = express.Router();

router.route("/check").get(check);

module.exports = router;