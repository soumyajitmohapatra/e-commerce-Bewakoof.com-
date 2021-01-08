import React from "react";
import styled from "styled-components";
import { Fade, Zoom } from "react-reveal";
import getData from "../Getdata";
import { CardDeck, Container } from "react-bootstrap";

// COMMPONENTS IMPORTS FROM SUBS
import Row0 from "./subHome/Row0";
import Row1 from "./subHome/Row1";
import Row2 from "./subHome/Row2";
import BrowseCard from "./subHome/Browse_card";
import Row3 from "./subHome/Row3";
import Row4 from "./subHome/Row4";
import Row5 from "./subHome/Row5";

const Home = () => {
  const { docs } = getData("browsetopwear");
  const { document } = getData("browsebottomwear");
  
  return (
    <Container style={{ marginTop: "4rem" }}>
      
        <Styles>
          <Fade>
            <Row0 />
          </Fade>
          <Fade big>
            <WhiteSpace></WhiteSpace>
            <Row1 src="https://images.bewakoof.com/uploads/grid/app/Brand-Trust-desktop-underslider-1592992663.jpg" />
            <WhiteSpace></WhiteSpace>
            <Row2 />
            <WhiteSpace></WhiteSpace>
            <Row1
              alt="abcdef"
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-title-card-online-shopping-DESKTOP-1603117869.jpg"
            />
            <SmallSpace></SmallSpace>
            <Container fluid>
              <CardDeck>
                {docs &&
                  docs.map((doc) => <BrowseCard key={doc.id} src={doc.url} />)}
              </CardDeck>
            </Container>
            <SmallSpace></SmallSpace>
            <Row1
              alt="abcd"
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-title-card-online-shopping-DESKTOP-BOTTOMWEAR-1603117870.jpg"
            />
            <SmallSpace></SmallSpace>
            <Container fluid>
              <CardDeck>
                {document &&
                  document.map((doc) => (
                    <BrowseCard key={doc.id} src={doc.url} />
                  ))}
              </CardDeck>
            </Container>
            <WhiteSpace></WhiteSpace>

            <Row1 src="https://images.bewakoof.com/uploads/grid/app/branding-section-desktop-underslider-1589380737.png" />

            <WhiteSpace></WhiteSpace>
            <Row1 src="https://images.bewakoof.com/uploads/grid/app/announcement-desktop-strip--1--1594387974.jpg" />
            <WhiteSpace></WhiteSpace>
            <Row1
              src="https://images.bewakoof.com/uploads/grid/app/Browse-Trending-Title-1588256970.png"
              alt="suh"
            />
            <WhiteSpace></WhiteSpace>
            <Row3 />
            <SmallSpace></SmallSpace>
            <Row1
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-top-card-title-regional-online-shopping-desktop-1603720683.jpg"
              alt="suh"
            />
            <SmallSpace></SmallSpace>
            <Zoom>
              <Row4 />
            </Zoom>
            <SmallSpace></SmallSpace>
            <Row1
              src="https://images.bewakoof.com/uploads/grid/app/Featured-Collections-1588256971.png"
              alt="suh"
            />
            <SmallSpace></SmallSpace>
            <Row5 />
            <WhiteSpace></WhiteSpace>
          </Fade>
        </Styles>
    </Container>
  );
};

export default Home;

const Styles = styled.div`
  /* padding: 0 12% 0 11%; */

  .card-deck,
  .container {
    display: flex;
  }
`;

const WhiteSpace = styled.div`
  height: 2.3rem;
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    height: 0.7rem;
  }
  @media (min-device-width: 768px) and (max-device-width: 1024px) {
    height: 1.3rem;
  }
`;

const SmallSpace = styled(WhiteSpace)`
  height: 1.8rem;
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    height: 0.5rem;
  }
  @media (min-device-width: 768px) and (max-device-width: 1024px) {
    height: 1rem;
  }
`;
