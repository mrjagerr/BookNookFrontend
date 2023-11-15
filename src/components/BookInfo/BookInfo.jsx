import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function BookMapper({ users }) {
  const [book, setBook] = useState([]);
  const navigate = useNavigate();
  const handleClick = (event, param) => {
 

    navigate("/booksinfo", { state: param });
  };

  return (
    <div>
     
      {users &&
        users.map((users) => (
          <li key={users.id} onClick={(event) => handleClick(event, users.id)}>
            <a href="">
              {users.volumeInfo.title}
            </a>
          </li>
        ))}
    </div>
  );
}
