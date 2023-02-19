import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home/home";
import Patient from "./Pages/patient/patient";
import Treatment from "./Pages/treatment";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/treatment" element={<Treatment />} />
      </Routes>
    </>
  )
}

export default App;
