import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>BookNook</b>
            
          </Link>
          <br></br>
          <Link to="/favorites" style={{ textDecoration: "none", color: "white" }} className="favorites">
             <b>Favorites</b>
              
          </Link>
       
        </li>
        
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
       
      </ul>
      <div className="search">
         <SearchBar/>
      </div>
     
    </div>
  );
};

export default Navbar;
