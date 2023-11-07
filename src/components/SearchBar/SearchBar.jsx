
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
 const[search,setSearch] =useState('');
 const navigate= useNavigate();
const handleSubmit =(event) =>{
  event.preventDefault();
  navigate('/booksdetails', {state:search});


  




};
  return (
    <form onSubmit={handleSubmit}  className="searchbar">
      <input value={search}   onChange={(e) => setSearch(e.target.value)} type="text" id="search"></input>
      <button type="submit" >{console.log(search)} search  </button>
      
      
    </form>
  );
};

export default SearchBar;