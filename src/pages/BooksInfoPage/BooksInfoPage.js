import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./BooksInfoPage.css";
import * as DOMPurify from 'dompurify';

const BooksInfoPage = () => {
  const [book, setBook] = useState([]);
  const [img, setImg] = useState([]);
  const { state } = useLocation();
  const clean= DOMPurify.sanitize(book.description,{FORBID_TAGS: ['p','br']})

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
    <div className="card">
      {console.log(state)}
      {console.log(book)}
      {console.log(img)}
      <div className="thumbnail">
        <img src={img.smallThumbnail}></img>
      </div>
      <table>
      <tbody>
      <tr> Title : {book.title}</tr>
      <tr> Authors : {book.authors}</tr>
      <tr> Destription</tr>
      <td>{clean}</td>
      </tbody>
      </table>
      
    </div>
  );
};

export default BooksInfoPage;
