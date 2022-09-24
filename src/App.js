import React from "react";
import classes from "./App.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ScrollUp from "./Components/ScrollUp/ScrollUp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
