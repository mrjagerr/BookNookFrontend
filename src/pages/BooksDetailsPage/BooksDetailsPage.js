import React,{useState,useEffect} from "react";
import axios from "axios";




const BooksDetailsPage = () => {
    const [users,setUsers] = useState([])
  useEffect(() => {
fetchUsers();
  }, []);


    const fetchUsers = async () =>{
        try{
            let response= await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers(response.data)
        } catch (error){
            console.log(error.message)
        }
    }


    return (  
        <div>
            test
        {users && users.map(user =>{
            return <li key = {user.id}> {user.name}<br/>{user.website} </li>
        })}
        </div>
    );
}
 
export default BooksDetailsPage;