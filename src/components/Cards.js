import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export const Cards = ({ breedImage }) => {
    console.log(breedImage, 'aqui3')
  return (
    <Col md={3} style={{ marginBottom: "20px" }}>
      {breedImage.forEach((e) => {
        <Card className="shadow-lg p-3 mb-5 bg-white rounded">
          <Card.Img
            variant="top"
            src={e}
            alt="a"
            style={{ height: "238px" }}
          />

        </Card>;
      })}
    </Col>
  );
};


