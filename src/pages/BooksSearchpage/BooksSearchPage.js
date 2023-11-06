
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../../localData";
import SearchBar from "../../components/SearchBar/SearchBar.jsx";






const BooksSearchPage = () => {
    const [users, setUsers] = useState(Data);
    const [books,setBooks] = useState([]);
    
    useEffect(() => {
    fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=quilting`
        );
        setUsers(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    
      
  async function getBooks(entry) {
    let userinput = entry;
    let fiilteredBooks= users.filter(function (users) {
      if (users.volumeInfo.title.includes(userinput)) {
        return true;
      }
      
    });

    setBooks(fiilteredBooks);
    console.log(books);
  }
   
  
    return (
      <div>
        test 
    <SearchBar onSubmit ={getBooks} />
    
       
        
      
       
      </div>
    );
  };
  
  export default BooksSearchPage;