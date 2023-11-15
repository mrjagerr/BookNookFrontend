import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";





const FavoritesPage = () => {
const [user, token] = useAuth();
const [favorites, setFavorites] = useState([]);


useEffect(() => {
  fetchFavorites();
 
}, [token]);

const fetchFavorites = async () => {
  try {
    let response = await axios.get("https://localhost:5001/api/favorites/myFavorites", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
 setFavorites(response.data);


  
    
    console.log(response.data)
  
  } catch (error) {
    console.log(error.response.data);
  }
};



    return ( 
        <div>
          
           {favorites &&
        favorites.map((favorites,index) => {
          return (
            <li key={index}>
            
              {favorites.title}
             <div> <img src={favorites.thumbnailUrl}></img></div>
              
            </li>
          );
        })}
        </div>
     );
}
 
export default FavoritesPage;