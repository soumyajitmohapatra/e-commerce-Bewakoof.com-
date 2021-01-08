import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";

function Row2() {
  return (
    <Styles>
      <Carousel>
        <Carousel.Item>
          <Link to="/random-sales">
            <Image
              className="d-block w-100"
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-oof-sale-desktop-strip-1603097557.jpg"
              alt="First slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/random-sales">
            <Image
              className="d-block w-100"
              src="https://images.bewakoof.com/uploads/grid/app/DesktopStrip-TriBe-1606924612.jpg"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/random-sales">
            <Image
              className="d-block w-100"
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-shirt-and-kurta-online-fashion-shopping-DESKTOP-STRIP-1603893838.jpg"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/random-sales">
            <Image
              className="d-block w-100"
              src="https://images.bewakoof.com/uploads/grid/app/bewakoof-mobile-cover-parade-shopping-banner-desktop-strip-1606294605.jpg"
              alt="Third slide"
            />
          </Link>
        </Carousel.Item>
      </Carousel>
    </Styles>
  );
}

export default Row2;

const Styles = styled.div`
  .carousel,
  .slide {
    padding: 0 1.1rem;
  }
`;
