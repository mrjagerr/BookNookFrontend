import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Location, useLocation } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./ReviewBook.css";

const ReviewBook = () => {
  const [user, token] = useAuth();
  const [reviewWithUser, setReviewWithUser] = useState([]);
  const { state } = useLocation();
  const [reviews, setReviews] = useState([]);



  useEffect(() => {
    fetchReviewWithUser();
  }, [token]);

  const fetchReviewWithUser = async () => {
    try {
      let response = await axios.get(
        `https://localhost:5001/api/booksdetail/${state}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      setReviewWithUser(response.data);

      setReviews(response.data.reviews);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  let avgRating = 0;
  if (reviewWithUser.averageRating === undefined) {
    avgRating = 0;
  }
  if (reviewWithUser.averageRating !== undefined) {
    avgRating = reviewWithUser.averageRating;
  }
 
  return (
    <div>
      <div className="ratingBox">
        <label>Rating:</label>
        {parseFloat(avgRating).toFixed(1)}
      </div>

      {reviews &&
        reviews.map((review) => {
          return (
            <li key={review.id} className="reviewBoxRow1">
              <p className="reviewBoxRow2">{review.user.userName}</p>
              <p>{review.text}</p>
            </li>
          );
        })}
    </div>
  );
};
export default ReviewBook;
