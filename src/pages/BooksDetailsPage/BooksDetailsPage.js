import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../../localData";

const BooksDetailsPage = () => {
  const [users, setUsers] = useState(Data);
  useEffect(() => {
    // fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      let response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ"
      );
      setUsers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <li>{users.volumeInfo.title}</li>
      <li>
        <img src={users.volumeInfo.imageLinks.small}></img>
      </li>

      <br></br>
      <li>{users.volumeInfo.description}</li>
    </div>
  );
};

export default BooksDetailsPage;
