import React,{useState} from 'react';
import axios from 'axios';
const SearchResults = ({searchKey}) => {
    const [data, setdata] = useState([]);
    const search = async()=>{
        const {data} = await axios.get(
          `http://localhost:4001/api/v1/searchRestraunts`
        ,{
            searchKey
        });
        setdata(data);
    }
    console.log(data);
  return (
    <div>SearchResults</div>
  )
}

export default SearchResults