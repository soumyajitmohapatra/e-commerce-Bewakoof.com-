import React from "react";
import styled from "styled-components";
import getData from "../../Getdata";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";

function Row0() {
  const { docs } = getData("topcard");
  return (
    <Styles>
      <Container fluid>
        <Row>
          {docs &&
            docs.map((doc) => (
              <Col key={doc.id} xs={4}>
                <Link to={doc.link}>
                  <Image alt="dhsudsu" src={doc.url} thumbnail />
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </Styles>
  );
}

export default Row0;

const Styles = styled.div`
  .img-thumbnail {
    border: none;
  }
`;
