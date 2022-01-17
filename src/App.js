import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./Home/Home";
//import { BrowserRouter, Link } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./Navbar";
import View from "./view";
import Tools from "./tools";
import Partner from "./partner.js";
import Contact from "./contact.js";
import Wood from "./Wood";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Wood} />
          <Route path="/Home" component={Home} />
          <Route path="/Navbar" component={Navbar} />
          <Route path="/view" component={View} />
          <Route path="/tools" component={Tools} />
          <Route path="/partner" component={Partner} />
          <Route path="/contact" component={Contact} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
