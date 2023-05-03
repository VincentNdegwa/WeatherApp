import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./MainPages/HomePage";
import RentalPage from "./MainPages/RentalPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RentalPage/:id" element={<RentalPage />} />
      </Routes>
    </div>
  );
}

export default App;
