import React from "react";
import "./Home.css";
import Header from "../../Components/Header/Header";
import Hero from "../../Components/Hero/Hero";

function Home() {
  return (
    <div className="Homepage" id="Home">
      <Header />
      <Hero />
    </div>
  );
}

export default Home;
