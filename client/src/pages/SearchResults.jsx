import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
const SearchResults = () => {
  const [data, setdata] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const searchKey = queryParams.get("searchkey");
  console.log(searchKey);
  const search = async () => {
    const {
      data: { data },
    } = await axios.post(`http://localhost:4001/api/v1/searchRestraunts`, {
      restraunt: searchKey,
    });
    setdata(data);
  };
  useEffect(() => {
    search();
  }, [searchKey]);
  if (data.length === 0) {
    return (
      <div className=" mt-[40vh] flex items-center justify-center">
        <div>
            No data Found
        </div>
      </div>
    );
  }
  return (
    <div className=" shadow-2xl hover:shadow-lg translate-x-2 translate-y-3  ">
      <main className=" grid grid-cols-4 items-center justify-center max-md:grid-cols-2">
        {data.map((d, i) => {
          return (
            <main key={i}>
              <h1 className=" text-center font-roboto text-4xl font-semibold">
                Restraunt {i + 1}
              </h1>
              <article className=" font-montserrat text-xl p-10">
                <h1>{d.name}</h1>
              </article>
              <h1 className=" font-roboto text-xl  font-bold p-4">
                Location:<span className=" font-montserrat">{d.location}</span>
              </h1>
              <h1 className=" font-roboto p-4 text-xl">
                Price_Range:
                <span className=" font-montserrat text-lg">
                  ${d.price_range}
                </span>
              </h1>
            </main>
          );
        })}
      </main>
    </div>
  );
};

export default SearchResults;
