import React from "react";
import "./contact.css";
import ved from "./Images/Skype.mp4";
const Contact = () => {
  // const change=(e)=>{
  //   var myElement = document.querySelector('#first')
  //   myElement.classList.add('second');
  // }

  return (
    <>
      <div id="contactid" className="contact_main">
        <video width="100%" height="500px" controls className="ved">
          <source src={ved} type="video/mp4" />
        </video>
        {/* <iframe
          {/* width="100%"
          height="500px"
          src="https://www.youtube.com/embed/VHHDw3EUJGA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> */}
      </div>
    </>
  );
};
export default Contact;
