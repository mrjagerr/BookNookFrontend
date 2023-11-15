import React, { useState, useEffect } from "react";
import axios from "axios";
import { Data } from "../../localData";
import { useLocation } from "react-router-dom";
import BookMapper from "../../components/BookInfo/BookInfo";


const BooksDetailsPage = () => {
  const [volumes, setVolumes] = useState([]);
  const { state } = useLocation();
  console.log("state inside of bookdetails page : ", state);
  useEffect(() => {
    fetchVolumes();
  }, []);

  const fetchVolumes = async () => {
    try {
      let response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${state}`
      );
      setVolumes(response.data.items);
     
    } catch (error) {
      console.log(error.message);
    }
  };
  console.log(volumes);

  return (
    <div>
      Search result
     <BookMapper users={volumes}  />
    
    </div>
  );
};

export default BooksDetailsPage;
