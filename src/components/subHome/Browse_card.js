import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function BrowseCard(props) {
  return (
    <Card>
      <Link to="/coming-soon">
        <Card.Img
          key={props.id}
          variant="top"
          src={process.env.PUBLIC_URL + props.src}
          alt="dsuhdsu"
        />
      </Link>
    </Card>
  );
}

export default BrowseCard;
