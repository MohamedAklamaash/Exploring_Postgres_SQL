const db = require("../db");

const check = async (req, res) => {
  try {
    return res.send("Connection Established!");
  } catch (error) {
    console.log("Error in check function");
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};

const createRestraunt = async (req, res) => {
  try {
    const { name, price_range, location } = req.body;
    const data = await db.query(
      "INSERT INTO restaurants(name,price_range,location) VALUES ($1,$2,$3)",
      [name, price_range, location]
    );
    if (data.rowCount === 0) {
      return res.status(404).json({
        success: false,
        msg: "Error in creating a new Restraunt",
      });
    }
    return res
      .status(201)
      .json({ success: true, msg: "Data inserted successfully!" });
  } catch (error) {}
};

const getAllRestraunt = async (req, res) => {
  try {
    const data = await db.query("SELECT * FROM restaurants");
    return res
      .status(200)
      .json({ success: true, data: data.rows, length: data.rows.length });
  } catch (error) {
    console.log("Error in get all restraunts");
  }
};

const updateRestraunt = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price_range, location } = req.body;
    const data = await db.query(
      "UPDATE restaurants SET name=$1,price_range=$2,location=$3 where id=$4",
      [name, price_range, location, id]
    );
    if (data.rowCount === 0) {
      return res.status(404).json({
        success: false,
        msg: "Cannot update an Restraunt that doesn't exist",
      });
    }
    return res
      .status(201)
      .json({ success: true, msg: "Data updated successfully!" });
  } catch (error) {}
};

const deleteRestraunt = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await db.query("DELETE FROM restaurants WHERE id=$1", [id]);
    if (data.rowCount === 0) {
      return res.status(404).json({
        success: false,
        msg: "Cannot delete an Restraunt that doesn't exist",
      });
    }
    return res
      .status(201)
      .json({ success: true, msg: "Data deleted successfully!" });
  } catch (error) {}
};

const getOneRestraunt = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await db.query(`SELECT * FROM restaurants WHERE id=$1`, [
      id,
    ]);
    if (rows.length === 0) {
      return res.status(404).json({ success: false, msg: "Data not found" });
    }
    return res.status(201).json({ success: true, data: rows });
  } catch (error) {}
};

const searchRestraunt = async(req,res)=>{
  const {restraunt} = req.body;
  const data = await db.query(`SELECT * FROM restaurants WHERE name ILIKE '${restraunt}%'`);
  const {rows} = data;
  if( data === undefined)
  {
    return res.status(404).json({success:false,msg:"No Data Found"});
  }
  return res.status(200).json({success:true,data:rows});
}

module.exports = {
  check,
  createRestraunt,
  getAllRestraunt,
  updateRestraunt,
  deleteRestraunt,
  getOneRestraunt,
  searchRestraunt
};
