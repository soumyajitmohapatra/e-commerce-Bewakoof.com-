import React from "react";
import styled from "styled-components";
import getData from "../../Getdata";
import ItemCard from "./ItemCard";
import { Container, Image } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { ButtonGroup, Button } from "@material-ui/core";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(0),
    },
  },
}));

function MenClothing() {
  const { docs } = getData("men-clothing");
  const { document } = getData("women-clothing");
  const classes = useStyles();

  return (
    <Container>
      <Styles>
        <Title>
          <Image
            width="100%"
            src="https://i.pinimg.com/564x/d9/54/9f/d9549f839d101db153d0bedc5d7da142.jpg"
            fluid
          />
          <BREADCRUMB className={classes.root}>
            <ButtonGroup
              variant="contained"
              aria-label="contained primary button group"
            >
              <Link exact to="/">
                <Button>Home</Button>
              </Link>
              <Link to="/men-clothing">
                <Button>Men</Button>
              </Link>
              <Link to="/women-clothing">
                <Button>Women</Button>
              </Link>
            </ButtonGroup>
          </BREADCRUMB>
        </Title>

        <CardStyle>
          {document &&
            document.map((doc) => (
              <ItemCard
                key={doc.id}
                id={doc.id}
                pName={doc.pName}
                image={doc.url}
                rating={doc.rating}
                price={doc.price}
                originalPrice={doc.originaPrice}
              />
            ))}
          {docs &&
            docs.map((doc) => (
              <ItemCard
                key={doc.id}
                id={doc.id}
                pName={doc.pName}
                image={doc.url}
                rating={doc.rating}
                price={doc.price}
                originalPrice={doc.originaPrice}
              />
            ))}
        </CardStyle>
      </Styles>
    </Container>
  );
}

export default MenClothing;

const BREADCRUMB = styled.div`
  background: #b5b0b0;
  button {
    padding: 1rem 2rem;
    color: #000;
    font-weight: bolder;
    background: #b5b0b0;
    outline: none;
    &:hover,
    &:focus {
      background: #b5b0b0;
      box-shadow: inset 19px 19px 37px #a19f74, inset -19px -19px 37px #ffffe6;
      outline: none;
    }
  }
  a {
    color: #000;
    text-decoration: none;
    &:hover,
    &:focus {
      color: rgba(255, 255, 255, 0.5);
    }
  }
`;

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 2.5rem auto 0 auto;

  @media (max-width: 990px) {
    width: 100%;
    margin: auto;
    margin-top: 2.5rem;
    width: 100%;
    justify-content: space-evenly;
  }
`;

const Title = styled.div`
  position: relative;
  top: 1.5rem;
`;

const Styles = styled.div`
  margin-top: 3rem;
`;
