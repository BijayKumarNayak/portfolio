import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";
import Skill from "./component/skill/Skill";
import Project from "./component/projects/Project";

const App = () => {
  return (
    <div className="w-full h-full overflow-hidden">
      <Home />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};

export default App;
