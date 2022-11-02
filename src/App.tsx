import React from 'react';
import SearchAndListOfDoctors from "./pages/SearchAndListOfDoctors";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import CardDoctor from "./pages/CardDoctor";

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<SearchAndListOfDoctors/>}/>
              <Route path="CardDoctor" element={<CardDoctor/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
