import React from "react";


export default function BookMapper({users}){
    return <div> 
    {console.log(users)}
    {users &&
        users.map((users) => (
          <li key={users.id}>
            {users.volumeInfo.title} 
          </li>
        ))}
    </div>
} 