const express = require("express");
const {
  check,
  getAllRestraunt,
  createRestraunt,
  updateRestraunt,
  deleteRestraunt,
  getOneRestraunt,
  searchRestraunt,
} = require("../controllers/yelp_v1_controller");
const router = express.Router();

router.route("/check").get(check);
router.route("/getallrestraunts").get(getAllRestraunt);
router.route("/createNewRestraunt").post(createRestraunt);
router.route("/updateRestraunt/:id").put(updateRestraunt);
router.route("/deleteRestraunt/:id").delete(deleteRestraunt);
router.route("/getRestrauntDetails/:id").get(getOneRestraunt);
router.route("/searchRestraunts").get(searchRestraunt);

module.exports = router;
