import React from 'react';
import { Link } from "react-router-dom";

function Popup(props) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h2>{props.title}</h2>
        <p>{props.message}</p>

        <div className="buttons">
          <button onClick={() => window.location.reload()}>New Patient</button>
          {/* <Link to='/treatment'>
              <button>New Patient</button>
          </Link> */}
          <Link to='/home'>
              <button>Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Popup;