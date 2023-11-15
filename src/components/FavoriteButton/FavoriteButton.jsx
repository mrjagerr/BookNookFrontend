import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Location, useLocation } from "react-router-dom";
import './FavoriteButton.css'



const FavoriteButton = ({bookDetails}) => {
    const { state } = useLocation();
    const [user, token] = useAuth();
    const [bookId, setBookId] = useState(state);
    
    


    useEffect(() => [token]);


    
    async function addFavorite() {
    
        axios.post(
          "https://localhost:5001/api/favorites/",
          {
          bookId:bookId,
          title: bookDetails.title,
          thumbnailurl:bookDetails.imageLinks.thumbnail
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
        addFavorite();
      
      }
    return ( 
    <form onSubmit={handleSubmit}>
      <input className="favoritebutton" type="submit" value="Add to favorites" />
      </form> );
}
 
export default FavoriteButton;



