import React from "react";
import styled from "styled-components";
import getData from "../../Getdata";
import { Link } from "react-router-dom";

import { Container, Row, Col, Image } from "react-bootstrap";

function Row4() {
  const { docs } = getData("browseregional");
  return (
    <Styles>
      <Container fluid>
        <Row>
          {docs &&
            docs.map((doc) => (
              <Col key={doc.id} style={{ paddingBottom: "1rem" }} xs={4}>
                <Link to="/random-sales">
                  <Image alt="dhsudsu" src={doc.url} thumbnail />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </Styles>
  );
}

export default Row4;

const Styles = styled.div`
  .img-thumbnail {
    border: none;
  }
`;
