import React from 'react';
import { Link } from "react-router-dom";
import './home.css';
import doctor from './doctor.png';

function Home (){
   return (
     <div>
       <h1 className = 'primary'>Tree-tment!</h1>
       <Link to='/treatment'>
           <button id = "patient-button">Look at Patient</button>
       </Link>


       <button id = "customize">Customize Doctor</button>
       <button id = "settings">Settings</button>
      
       <div id = "square"></div>


       <img className="doctor" src={doctor} alt="Doctor Character"></img>


       <p id = "p1">Welcome, Billy!</p>
       <p id = "p2">$ 500</p>
       <p id = "p3">Level 4 Doctor</p>


       <h2>Stats</h2>
     </div>
   )
}
export default Home;
