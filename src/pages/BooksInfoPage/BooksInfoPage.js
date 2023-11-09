import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./BooksInfoPage.css";
import * as DOMPurify from "dompurify";

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
      {console.log(state)}
      {console.log(book)}
      {console.log(img)}
      <div className="thumbnail">
        <img src={img.thumbnail} width={300} height={300}  ></img>
      </div>
      <button> Favorite </button>
      <table>
        <tbody>
          <tr> Title : {book.title}</tr>
          <tr> Authors : {book.authors}</tr>
          <tr> Destription</tr>
          <td>{clean}</td>
        </tbody>
      </table>
      </div>
     
     
     
    </div>
  );
};

export default BooksInfoPage;
