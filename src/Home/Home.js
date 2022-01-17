import React from "react";
import Navbar from "../Navbar";
import "./Home.css";

const Home = () => {
  return (
    <>
      {/* <div className="section1">
        <p className="section1_text">Click Me</p>
      </div> */}
      <div>
        {/* <Navbar/> */}
        <div className="section1" id="home">
          <Navbar />
          <div className="section1_main">
            <div className="sec1_txt1">
              <span className="sec1_txt2">W</span>OOD{" "}
              <span className="sec1_txt2">W</span>ORKSHOP
            </div>
            <p className="sec1_txt3">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione sed
              quia consequuntur magni dolores eos qui rationesed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi
              nesciunt
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
