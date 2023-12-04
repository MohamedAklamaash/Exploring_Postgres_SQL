import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
const Navbar = () => {
  const [searchKey, setsearchKey] = useState("");
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
          <h1
            className=" font-mono text-lg cursor-pointer"
            onClick={() => navigate("/createnew")}
          >
            Create a new Restraunt
          </h1>
          <div className=" flex items-center space-x-3">
            <input
              className=" rounded-xl p-4  font-montserrat"
              type="text"
              placeholder="Search for restraunts"
              onChange={(e) => {
                setsearchKey(e.target.value);
              }}
              onKeyUpCapture={(event) => {
                if (event.key === "Enter") {
                  navigate(`/search?searchkey=${searchKey}`);
                }
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={() => {
                navigate(`/search?searchkey=${searchKey}`);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
        <div>
          <LoginPage />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
