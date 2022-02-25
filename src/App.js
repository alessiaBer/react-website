import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Metti il tuo component qui</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
