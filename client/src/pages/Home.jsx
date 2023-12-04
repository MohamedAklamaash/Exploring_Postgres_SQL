import { useState, useEffect } from "react";
import axios from "axios";
import "./button.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [resData, setresData] = useState([]);
  const navigate = useNavigate();
  const getAllRestrauntsData = async () => {
    const { data } = await axios.get(
      `http://localhost:4001/api/v1/getallrestraunts`
    );
    setresData(data.data);
  };

  useEffect(() => {
    getAllRestrauntsData();
  }, []);
  const deleteARestraunt = async (id) => {
    const { data } = await axios.delete(
      `http://localhost:4001/api/v1/deleteRestraunt/${id}`
    );
    window.location.reload();
    setresData(data.data);
  };

  return (
    <div className=" p-6 flex items-center justify-center flex-col gap-10 mt-[5%] max-md:mt-[16%] ">
      {resData.map((data, index) => {
        return (
          <div
            key={index}
            className=" flex items-center justify-center gap-10 "
          >
            <div className=" flex items-center gap-10 text-lg  font-roboto ">
              <h1>{data.name}</h1>
              <h1>{data.location}</h1>
              <h1>{data.price_range}</h1>
            </div>
            <div className=" flex items-baseline justify-around space-x-6">
              <button className="button-89"
              onClick={()=>{
                navigate(`/updateRestraunt/${data.id}`);
              }}
              >Update</button>
              <button
                className="button-86"
                onClick={() => {
                  deleteARestraunt(data.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
