import React from "react";
import Home from "./Pages/Home/Home";
import Carspage from "./Pages/Carspage/Carspage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import TestimonialsPage from "./Pages/TestimonialsPage/TestimonialsPage";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function MainPage() {
  return (
    <div>
      <Home />
      <Carspage />
      <ServicesPage />
      <TestimonialsPage />
    </div>
  );
}

export default MainPage;
