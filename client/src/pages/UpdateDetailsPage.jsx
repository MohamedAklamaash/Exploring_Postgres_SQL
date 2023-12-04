import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./button.css";
const UpdateDetailsPage = () => {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");
  const [location, setlocation] = useState("");
  const [price_range, setprice_range] = useState(0);
  const getRestrauntDetails = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/api/v1/getRestrauntDetails/${id}`
    );
    setdata(data.data);
  };

  useEffect(() => {
    getRestrauntDetails();
  }, [id]);
  const updateRestrauntDetails = async()=>{
    try {
    const { data } = await axios.put(
      `http://localhost:4001/api/v1/updateRestraunt/${id}`,
      {
        name,
        location,
        price_range,
      }
    );
    window.location = "/";
    } catch (error) {
      console.log("error");
    }
  }
  return (
    <div>
      <h1 className=" p-10 text-4xl font-montserrat">
        Update Restraunt Details
      </h1>
      {data.map((d, index) => {
        return (
          <div key={index} className="mt-[10%]">
            <div className=" flex items-center justify-center mb-6">
              <p className=" text-xl font-roboto font-bold ">Restraunt Name:</p>
              <input
                className=" text-xl font-montserrat p-6 w-max "
                value={name}
                type="text"
                onChange={(e) => {
                  setname(e.target.value);
                  console.log(name);
                }}
              />
            </div>
            <div className=" flex items-center justify-center  mb-6">
              <p className=" text-xl font-roboto font-bold">Location:</p>
              <input
                className=" text-xl font-montserrat p-6 w-max "
                value={location}
                type="text"
                onChange={(e) => {
                  setlocation(e.target.value);
                }}
              />
            </div>
            <div className=" flex items-center justify-center  mb-6">
              <p className=" text-xl font-roboto font-bold">Price Range:</p>
              <input
                className=" text-xl font-montserrat p-6 w-max "
                type="number"
                placeholder="Enter Price"
                onChange={(e) => {
                  setprice_range(e.target.value);
                }}
              />
            </div>
            <div className="w-4/6 flex items-center justify-end">
              <button
                className="button-49"
                onClick={() => {
                  updateRestrauntDetails();
                }}
              >
                Update
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateDetailsPage;
