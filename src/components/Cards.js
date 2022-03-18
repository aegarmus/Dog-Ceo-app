import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row, Container } from "react-bootstrap";
import _ from "lodash";





export const Cards = ({ breedImage }) => {
  const getByBreeds = (e) => {
     
    return (
        e && e.map(x => (
        <Col md="auto" style={{ marginBottom: "20px" }}>
        <Card >
          <Card.Img variant="top" src={x} />
        </Card>
      </Col>))
    );
  };


  return (
    <>
      <Container>
        <Row>
          {breedImage && breedImage.length
            ? breedImage.map((e) => getByBreeds(e))
            : "There are no active filters"}
        </Row>
      </Container>
    </>
  );
};
