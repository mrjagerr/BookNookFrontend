
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../../localData";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";







const BooksSearchPage = () => {
    const [users, setUsers] = useState(Data);
    useEffect(() => {
    //  fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        let response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=quilting"
        );
        setUsers(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    
  
    return (
      <div>
       <SearchBar onSubmit={fetchUsers}/>
      </div>
    );
  };
  
  export default BooksSearchPage;