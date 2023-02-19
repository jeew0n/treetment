import React from 'react';
import { Link } from "react-router-dom";
  
function Home (){
    return (
      <div>
        <h1>Tree-tment!</h1>
        <Link to='/patient'>
            <button>Look at patient</button>
        </Link>
      </div>
    )
}
  
export default Home;
