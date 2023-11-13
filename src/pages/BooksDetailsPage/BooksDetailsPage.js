import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../../localData";
import { useLocation } from "react-router-dom";
import BookMapper from "../../components/BookInfo/BookInfo";

const BooksDetailsPage = () => {
  const [users, setUsers] = useState([]);
  const { state } = useLocation();
  console.log("state inside of bookdetails page : ", state);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${state}`
      );
      setUsers(response.data.items);
     
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(users);

  return (
    <div>
      Search result
     <BookMapper users={users}  />
    </div>
  );
};

export default BooksDetailsPage;
