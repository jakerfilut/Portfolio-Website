import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/Navbar.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import Tech from "./components/TechPage/Tech";
import Projects from "./components/Projects/Project";
import Contact from "./components/ContactMe/Mailer";
import NewProject from "./components/NewProject/NewPoject";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Tech />
      <NewProject />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
