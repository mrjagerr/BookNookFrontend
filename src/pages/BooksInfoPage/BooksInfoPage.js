import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


const BooksInfoPage = () => {
  const [book, setBook] = useState([]);
  const [img, setImg] = useState([]);
    const { state } = useLocation();
   
    useEffect(() => {
      fetchbook();
    }, []);
  
    const fetchbook = async () => {
      try {
        let response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes/${state}`
        );
        setBook(response.data.volumeInfo);
        setImg(response.data.volumeInfo.imageLinks);
       
      } catch (error) {
        console.log(error.message);
      }
    };
   
  
    return (
      <div>
        {console.log(state)}
        {console.log(book)}
        {console.log(img)}
       <li> {book.title}</li>
       <li>{book.authors}</li>
       <img src={img.smallThumbnail}></img>
       <li> {book.description}</li>
       
      
      </div>
    );
  };
  
  export default BooksInfoPage;