import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Location, useLocation } from "react-router-dom";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

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


  


  return (
    <div>
      <div>
        <label>Rating:</label>{reviewWithUser.averageRating}
      </div>

      <FavoriteButton ReviewState={reviewWithUser} />
      {reviews &&
        reviews.map((review) => {
          return (
            <li key={review.id}>
              {" "}
              {review.user.userName}  : 
              {review.text}
              
            </li>
         
          );
        })}
    </div>
  );
};
export default ReviewBook;
