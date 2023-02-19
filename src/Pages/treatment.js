import React, { useState } from 'react';
import { Link } from "react-router-dom";


import TextField from "@mui/material/TextField";
import List from "./List.js"
import "./treatment.css";
  
function Treatment (){
    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };
    
    return (
      <div>
        <h1>Treatment</h1>

        <div className="button-group">
          <Link to='/patient'>
              <button>New patient</button>
          </Link>
          <Link to='/home'>
              <button>Go to Home</button>
          </Link>
        </div>

        <div className="main">
          <h1>React Search</h1>
          <div className="search">
            <TextField
              id="outlined-basic"
              onChange={inputHandler}
              variant= "outlined"
              fullWidth
              label="Search"
            />
          </div>
          <List input={inputText}/>
        </div>
      </div>
  );
}
  
export default Treatment;
