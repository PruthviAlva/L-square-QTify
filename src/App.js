import React from "react";
import './App.css';
import Navbar from "./component/navbarComponent/Navbar";
import Hero from "./component/Hero";
import Section from "./component/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Hero />
        <Section />
      </div>
    </div>
  );
}

export default App;
