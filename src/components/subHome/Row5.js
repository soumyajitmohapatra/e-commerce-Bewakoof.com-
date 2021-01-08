import React from "react";
import styled from "styled-components";
import getData from "../../Getdata";
import { Link } from "react-router-dom";

import { Container, Row, Col, Image } from "react-bootstrap";

function Row5() {
  const { top } = getData("featuredcollection");
  return (
    <Styles>
      <Container fluid>
        <Row>
          {top &&
            top.map((doc) => (
              <Col key={doc.id} style={{ paddingBottom: "1rem" }} xs={6}>
                <Link to="/random-sales">
                  <Image src={doc.url} thumbnail />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </Styles>
  );
}

export default Row5;

const Styles = styled.div`
  .img-thumbnail {
    border: none;
  }
`;
