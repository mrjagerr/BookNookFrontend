import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./BooksInfoPage.css";
import * as DOMPurify from "dompurify";
import ReviewBook from "../../components/ReviewBook/ReviewBook";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

const BooksInfoPage = () => {
  const [book, setBook] = useState([]);
  const [img, setImg] = useState([]);
  const { state } = useLocation();
  const clean = DOMPurify.sanitize(book.description, {
    FORBID_TAGS: ["p", "br", "b", "a","i"],
  });

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
      <div className="card">
      
      <div className="thumbnail">
        <img src={img.thumbnail}   ></img>
      </div>
     
        <div className="cardContent">
          <li className=" cardinfo1"> Title : {book.title}</li>
          <li className="cardinfo1"> Authors : {book.authors}</li>
          <li className="cardinfo1"> Destription</li>
          <li className="cardinfo2">{clean}</li>
          </div>
          
     
     
      </div>
      
     
      <ReviewBook reviewBookId = {state}/>
     
     
    </div>
  );
};

export default BooksInfoPage;
