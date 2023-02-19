import React, { useState } from 'react';
import Popup from "./popup";
import TextField from "@mui/material/TextField";

const searchbar = () => {

  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  const [searchInput, setSearchInput] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <TextField
        id="outlined-basic"
        onChange={inputHandler}
        variant= "outlined"
        label="Search"
        onKeyDown={handleKeyDown}/>
        {showPopup && (
          <Popup
          title="Diagnosis Result"
          message="Correct"
          closePopup={closePopup}
          />
        )}
    </div>
  )
};

export default searchbar;