
import React, { useState } from "react";


const SearchBar = (onSubmit) => {
 const[search,setSearch] =useState('');
const handleSubmit =(event) =>{
  event.preventDefault();
  onSubmit(search)



}
  return (
    <form onSubmit={handleSubmit}  className="searchbar">
      <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" id="search"></input>
      <button type="submit"> Search</button>
      
    </form>
  );
};

export default SearchBar;