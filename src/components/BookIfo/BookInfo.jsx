import React from "react";
import { Navigate, useNavigate } from "react-router-dom";


export default function BookMapper({users}){
   
    
    return (<div> 
    {console.log(users)}
    {users &&
        users.map((users) => (
          <li key={users.id} ><a href="/booksinfo">
            {users.volumeInfo.title} </a>
          </li>
        ))}
    </div>
);}
