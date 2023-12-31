import React, { useEffect, useState } from "react";
import { Location, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import './PostReview.css'

const PostReview = () => {
  const { state } = useLocation();
  const [bookId, setBookId] = useState(state);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(Number);
  const [user, token] = useAuth();

  useEffect(() => [token]);

  async function addNewReview() {
    
    axios.post(
      "https://localhost:5001/api/reviews",
      {
        BookId: bookId,
        Text: text,
        Rating: rating,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
  }
  function handleSubmit(event) {
    event.preventDefault();

    let newReview = {};
    {
      console.log(newReview);
    }
    addNewReview(newReview);
    console.log(user);
    console.log(token);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label> Review :</label>
        <textarea
        className="reviewText"
          type="textarea"
          value={text}
          onChange={(event) => setText(event.target.value)}
          id="text"
          rows="4" cols="50"

        ></textarea>
        <label>Rating : (1-5)</label>
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
          id="rating"
          className="rating"
        ></input>
        <button type="submit" className="buttonDetails">Post</button>
      </form>
    </div>
  );
};

export default PostReview;
