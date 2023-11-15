import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./FavoritesPage.css";
import { Navigate, useNavigate } from "react-router-dom";

const FavoritesPage = () => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetchFavorites();
  }, [token]);
  const navigate = useNavigate();
  const handleClick = (event, param) => {
    console.log(event);
    console.log(param);

    navigate("/booksinfo", { state: param });
  };

  const fetchFavorites = async () => {
    try {
      let response = await axios.get(
        "https://localhost:5001/api/favorites/myFavorites",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setFavorites(response.data);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <h1>Favorites for {user.userName}!</h1>
      {favorites &&
        favorites.map((favorites, index) => {
          return (
            <li
              key={index}
              className="cardFav"
              onClick={(event) => handleClick(event, favorites.bookId)}
            >
              {favorites.title}
              <div>
                {" "}
                <img src={favorites.thumbnailUrl}></img>
              </div>
            </li>
          );
        })}
    </div>
  );
};

export default FavoritesPage;
