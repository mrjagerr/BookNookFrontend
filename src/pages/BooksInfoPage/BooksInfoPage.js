import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const BooksInfoPage = () => {
    const { state } = useLocation();
   
  
   
  
    return (
      <div>
        {console.log(state)}
       {state}
      </div>
    );
  };
  
  export default BooksInfoPage;