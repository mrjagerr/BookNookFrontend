import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BookDetailsPage = () => {
     const [users,setUsers] = useState([])
     useEffect(() =>
     {fetchUsers();
     },[]);
    

     const fetchUsers = async  () => {
        try{
             let response= await axios.get("https://jsonplaceholder.typicode.com/users");
             setUsers(response.data)
         } catch(error){
             console.log(error.message);
    }
     };


    return (
      <p>
             Test 
            
             {users && users.map(user => {
                return<li key ={user.id}>{user.name}</li>
            })} 
           

        </p>
           
       
        
      )
}
 
export default BookDetailsPage;