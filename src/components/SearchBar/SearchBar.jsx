
import React, { useState } from "react";


const SearchBar = (props) => {
 const[search,setSearch] =useState('');
const handleSubmit =(event) =>{
  event.preventDefault();

  



}
  return (
    <form onSubmit={handleSubmit}  className="searchbar">
      <input value={search}  onChange={(e) => setSearch(e.target.value)} type="text" id="search"></input>
      <button type="submit"  >{console.log(search)} search  </button>
      
      
    </form>
  );
};

export default SearchBar;