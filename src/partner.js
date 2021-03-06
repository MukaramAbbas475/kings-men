import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from "./Images/P1.jpg";
import slider2 from "./Images/P2.jpg";
import slider3 from "./Images/P3.jpg";

const Partner = () => {
  return (
    <>
      <div id="partner" style={{ width: "100%", height: "400px" }}>
        <Carousel>
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "400px" }}
              className="d-block w-100"
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "400px" }}
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ width: "100%", height: "400px" }}
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};
export default Partner;
