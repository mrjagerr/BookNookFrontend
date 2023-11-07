
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../../localData";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";






const BooksSearchPage = () => {
    const [users, setUsers] = useState(Data);
    const [books,setBooks] = useState([]);
    
   
    
   
    
    
   
   
  
    return (
      <div>
        
    <SearchBar />
   
    
       
        
      
       
      </div>
    );
  };
  
  export default BooksSearchPage;