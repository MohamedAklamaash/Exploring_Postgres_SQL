
const check = async (req, res, next) => {
  try {
    console.log("Caaling func");
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

const getAllRestraunt = async (req, res) => {
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
  getOneRestraunt,
};
