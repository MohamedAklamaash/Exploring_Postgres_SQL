const db = require("../db");
const check = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM restaurants");
    return res.status(200).json({success:true,data:data.rows});
  } catch (error) {
    console.log("Error in check function", error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const createRestraunt = (req, res) => {
  try {
  } catch (error) {}
};

const getAllRestraunt = async (req, res) => {
  try {
    return res.send("Hello");
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
  getOneRestraunt,
};
