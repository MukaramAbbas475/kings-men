import React from "react";
//import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import {HashLink as Link} from "react-router-hash-link";
import Nav_Image from "./Images/nav-img.jpg";
import Nav_img2 from "./Images/julie-molliver-Z3vFp7szCAY-unsplash.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid main">
        <div className="col-md-12 main1">
          <img src={Nav_img2} className="nav-img" alt="img"/>
          <div className="nav-items">
            <div className="nav_things">
              <Link className="link_style" to="#home" smooth>
                Home
              </Link>
            </div>
            <div className="nav_things">
              <Link className="link_style" to="#view" smooth>
                View
              </Link>
            </div>
            <div className="nav_things">
              <Link className="link_style" to="#tool" smooth>
                Tools
              </Link>
            </div>
            <div className="nav_things">
              <Link className="link_style" to="#partner" smooth>
                Partner
              </Link>
            </div>
            <div className="nav_things">
              <Link className="link_style" to='#contactid' smooth>
                Contact
              </Link>
            </div>
            <div className="nav-input-main">
            <input type="text" className="nav-input" placeholder="Search" />
          </div>
      </div>
          </div>
          {/* <div className="nav-input-main">
            <input type="text" className="nav-input" placeholder="Search" />
          </div> */}
        </div>
       
    </>
  );
};
export default Navbar;
