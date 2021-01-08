import React from "react";
import { Container, Image } from "react-bootstrap";

function Row2(props) {
  return (
    <Container fluid>
      <Image
        src={props.src}
        alt="XYZ"
        style={{
          display: "block",
          width: "100%",
          position: "relative",
        }}
        fluid
      />
    </Container>
  );
}

export default Row2;
