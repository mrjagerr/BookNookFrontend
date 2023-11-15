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
 

  console.log("state inside of ReviewBookComp page : ", state);

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
  if(reviewWithUser.averageRating === undefined){
    avgRating = 0
  }
  if(reviewWithUser.averageRating !== undefined){
    avgRating = reviewWithUser.averageRating;
  }
  console.log(reviewWithUser.averageRating)
  console.log(avgRating)
 
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
              <li className="reviewBoxRow2">{review.user.userName}</li>
              <li>{review.text}</li>
            </li>
          );
        })}
    </div>
  );
};
export default ReviewBook;
