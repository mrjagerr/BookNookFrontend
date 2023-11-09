import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";



export default function BookMapper({users}){
    const [book,setBook] = useState([])
    const navigate= useNavigate();
    const handleClick =(event,param) =>{
      console.log(event)
      console.log(param)
        
        navigate('/booksinfo', {state:param});}
   
   
    return (<div>   
    {console.log(users)}
    {users &&
        users.map((users) => (
          <li key={users.id} onClick ={event => handleClick(event,users.id)} ><a     on href="">
            {users.volumeInfo.title}</a>
          </li>
        ))}
    </div>
);}
