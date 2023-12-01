const db = require("../database")

const check = async (req, res, next) => {
  try {
    const responseFromDB = await db.query("SELECT * FROM yelp");
    console.log(responseFromDB);
    return res.status(200).json({ success: true, response: responseFromDB });
  } catch (error) {
    console.log("error in check func", error);
    return res
      .status(500)
      .json({ success: false, error: "Internal Server Error" });
  }
};


const createRestraunt = (req, res) => {
  try {
  } catch (error) {}
};

const getAllRestraunt = (req, res) => {
  try {
  } catch (error) {}
};

const updateRestraunt = (req, res) => {
  try {
  } catch (error) {}
};

const deleteRestraunt = (req, res) => {
  try {
  } catch (error) {}
};

const getOneRestraunt = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  check,
  createRestraunt,
  getAllRestraunt,
  updateRestraunt,
  deleteRestraunt,
  getOneRestraunt
};
