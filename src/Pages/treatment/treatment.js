import React, { useState } from 'react';
// import TextField from "@mui/material/TextField";
import List from "./List.js";
import SearchBar from "./searchbar";
import patient from './patient.jpg';
import "./treatment.css";
  
function Treatment () {

    const [inputText, setInputText] = useState("");

    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    const symptoms=['Fatigue', 'Fever', 'Loss of taste or smell', 'Sore throat'];
    
    return (
      <div>
        <h1>Diagnose the Patient</h1>
        <div>
          <div className="search">
            <SearchBar />
          </div>
          <div id="box"></div>
          <div className="patient"><img src={patient} alt="Man holding abdomen in pain"></img></div>
          <div className="list">Diseases:<List input={inputText}/></div>
          <div className="symptoms">
            Symptoms:
            {symptoms.map(item => (
              <li key={item}>{item}</li>
            ))}
          </div>
        </div>
      </div>
  );
}
  
export default Treatment;