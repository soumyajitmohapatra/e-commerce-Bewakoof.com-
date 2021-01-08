import React from "react";
import styled from "styled-components";
import getData from "../../Getdata";
import ItemCard from "./ItemCard";
// import Filter from "./Filter";
import { Link } from "react-router-dom";

import { Container } from "react-bootstrap";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";

function MobileCovers() {
  const { docs } = getData("mobile-covers");

  return (
    <Container>
      <Styles>
        <Title>
          <Breadcrumbs aria-label="breadcrumb">
            <Link to="/">
              <h3>Home</h3>
            </Link>
            <Link to="/mobile-covers">
              <h3>Mobile Covers 📱</h3>
            </Link>
          </Breadcrumbs>
        </Title>
        {/* <FilterStyle>
          <Filter />
        </FilterStyle> */}
        <CardStyle>
          {docs &&
            docs.map((doc) => (
              <ItemCard
                key={doc.id}
                id={doc.id}
                pName={doc.pName}
                image={doc.url}
                rating={doc.rating}
                price={doc.price}
                originalPrice={doc.originalPrice}
              />
            ))}
        </CardStyle>
      </Styles>
    </Container>
  );
}

export default MobileCovers;

// const FilterStyle = styled.div`
//   position: absolute;
//   top: 14rem;
//   @media (max-width: 990px) {
//     display: none;
//   }
// `;

const CardStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
  padding-top: 8.5rem;
  /* margin-left: 16%; */
  @media (max-width: 990px) {
    width: 100%;
    margin: auto;
    padding-top: 2rem;
    width: 100%;
    justify-content: space-evenly;
  }
`;

const Title = styled.div`
  position: relative;
  top: 4rem;
  .MuiTypography-body1 {
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }
  h3 {
    font-size: 22px;
    font-weight: bold;
  }
  a {
    color: #181818;
    &:hover {
      color: #7289ab;
    }
  }
  @media (max-width: 990px) {
    display: none;
  }
`;

const Styles = styled.div`
  margin-top: 3.6rem;
`;
