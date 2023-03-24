import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <div> 
        <Navbar />
      </div>
      <div>
        <Hero />
        <Skill />
        <Contact />
      </div>
    </div>
  );
}
export default App;
