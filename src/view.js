import React from "react";
import "./View.css";
//import View_Img from "./Images/view_img.jpg";
import card1 from "./Images/card1.jpg";
import card2 from "./Images/card2.jpg";
import card3 from "./Images/card3.jpg";
import { Button, Card } from "react-bootstrap";
const View = () => {
  return (
    <>
      <div id="view" className="Main col-md-12">
        <div className="view_txt">
          <span className="view_head">View</span>
        </div>
        <div className="view_section1">
          <Card style={{ width: "18rem", margin:"2%" }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin:"2%" }}>
            <Card.Img variant="top" src={card1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin:"2%" }}>
            <Card.Img variant="top" src={card3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem", margin:"2%" }}>
            <Card.Img variant="top" src={card2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};
export default View;
