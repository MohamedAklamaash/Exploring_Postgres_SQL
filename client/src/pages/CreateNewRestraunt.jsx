import React,{useState} from 'react'
import axios from 'axios';
const CreateNewRestraunt = () => {
  const [name, setname] = useState("");
  const [price_range, setprice_range] = useState(0);
  const [location, setlocation] = useState("");
  const handleSumbit = async()=>{
    const { data } = await axios.post(
      `http://localhost:4001/api/v1/createNewRestraunt`,{
        name,
        location,
        price_range
      }
    );
    window.location = "/";
  }
  return (
    <div className="mt-[10%]">
      <form action="" className=" w-full">
        <div className=" flex items-center justify-center">
          <label htmlFor="restraunt" className=" font-roboto text-lg font-bold">
            Restraunt Name:
          </label>
          <input
            type="text"
            placeholder="Restraunt Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className=" rounded-full p-4 font-montserrat text-xl  "
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor="restraunt" className=" font-roboto text-lg font-bold">
            Location Name:
          </label>
          <input
            type="text"
            placeholder="Location"
            onChange={(e) => {
              setlocation(e.target.value);
            }}
            className=" rounded-full p-4 font-montserrat text-xl  "
          />
        </div>
        <div className="flex items-center justify-center">
          <label htmlFor="restraunt" className=" font-roboto text-lg font-bold">
            Price Range:
          </label>
          <input
            type="number"
            placeholder="price"
            onChange={(e) => {
              setprice_range(e.target.value);
            }}
            className=" rounded-full p-4 font-montserrat text-xl  "
          />
        </div>
        <div className=" flex w-4/6 justify-end items-center">
          <button onClick={()=>handleSumbit()} className="btn-31">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateNewRestraunt