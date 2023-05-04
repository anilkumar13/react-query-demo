import React, { useState } from "react";

const Search = ({getsearchValue}) => {
    const [searchValue, setSearchValue] = useState("")
    const handleInputChange =(e)=>{
        setSearchValue(e.target.value)
    }
    const handleSearch=()=>{
        getsearchValue(searchValue)
    }
    return (
    <>
      <input type="text" value={searchValue} onChange={handleInputChange} placeholder="Enter post title" />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Search;
