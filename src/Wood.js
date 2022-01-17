import React from "react";
//import {HashLink as Link} from "react-router-hash-link";
//import { Link } from "react-router-dom";
//import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";
import Partner from "./partner";
import Tools from "./tools";
import View from "./view";
import Contact from "./contact";
//import Navbar from "./Navbar";
//import App from "./App";
const Wood = () => {
  return (
    <>
      <Home />
      <View />
      <Tools />
      <Partner />
      <Contact />
    </>
  );
};
export default Wood;
