import React from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
const Navbar = ({name}) => {
  const navigate = useNavigate();
  return (
    <header className=" p-6 bg-secondary-500 flex items-center justify-evenly   ">
      <header
        className="flex items-center  cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/168/168812.png"
          alt="Logo"
          className=" w-10 h-10"
        />
        <h1 className=" text-xl font-montserrat ">
          Better <span className=" text-primary-500 font-bold">Yelp</span>
        </h1>
      </header>
      <div className=" max-md:hidden flex gap-10">
        <div className=" flex items-center gap-8   ">
          <h1 className=" font-mono text-lg cursor-pointer" onClick={()=>navigate("/createnew")}>Create a new Restraunt</h1>
          <input
            className=" rounded-xl p-4  font-montserrat"
            type="text"
            placeholder="Search for restraunts"
          />
        </div>
        <div>
          <LoginPage />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
