import React from 'react';
import { Link } from "react-router-dom";
  
function Patient (){
    return (
      <div>
        <h1>Patient</h1>
        <Link to='/treatment'>
            <button>Diagnose</button>
        </Link>
      </div>
    )
}
  
export default Patient;