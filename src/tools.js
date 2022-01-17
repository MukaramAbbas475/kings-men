import React from "react";
import "./tools.css";
import tool_img from "./Images/nav-img.jpg";
const Tools = () => {
  return (
    <>
      <div id="tool" className="tool_main">
        <div className="tool_txt">
          <span className="head_txt">TOOLS</span>
        </div>
        <div className="col-md-12 d-flex tool_main1">
          <div className="tool_left col-md-6">
            <img alt="img" src={tool_img} className="tool_img" />
          </div>
          <div className="tool_right">
            <div>
              <p className="tool_right_head">The White paper</p>
              <p className="tool_right_txt">
                Token is a decentralized cryptocurrency that was created to
                become the token of reference for the interactive entertainment
                industry. Our goal is to have the Xverse Token used as widely as
                possible across the interactive entertainment industry, allowing
                developers and publishers new options for the exploitation of
                their products, integration of smart contracts, protection of
                in-game assets and so much more. Read about all our latest
                developments below!The White paper. Token is a decentralized
                cryptocurrency that was created to become the token of reference
                for the interactive entertainment industry. Our goal is to have
                the Xverse Token used as widely as possible across the
                interactive entertainment industry, allowing developers and
                publishers new options for the exploitation of their products,
                integration of smart contracts, protection of in-game assets and
                so much more. Read about all our latest developments below!
              </p>
            </div>
            <div className="tool_right_btn">
              <button className="B1">Read Me</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Tools;
