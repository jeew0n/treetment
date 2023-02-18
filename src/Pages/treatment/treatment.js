import React from 'react';
import { Link } from "react-router-dom";
  
function Treatment (){
    return (
      <div>
        <h1>Treatment</h1>
        <Link to='/patient'>
            <button>New patient</button>
        </Link>
        <Link to='/home'>
            <button>Go to home</button>
        </Link>
      </div>
    )
}
  
export default Treatment;