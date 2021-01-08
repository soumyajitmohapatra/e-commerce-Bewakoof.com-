import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import getData from "../../Getdata";

import { Container, Row, Col, Image } from "react-bootstrap";

function Row4() {
  const { docs } = getData("browsetrending");
  return (
    <Styles>
      <Container fluid>
        <Row>
          {docs &&
            docs.map((doc) => (
              <Col key={doc.id} style={{ paddingBottom: "1rem" }} xs={6}>
                <Link to="/random-sales">
                  <Image key={doc.id} src={doc.url} thumbnail />
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
