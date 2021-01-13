import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Burger from "./subHeader/Burger";




function Header() {
  return (
    <Styles>
      <Navbar
        expand="lg"
        style={{
          background: "#fdb827",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Space></Space>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="https://images.bewakoof.com/logos/bewakoof-logo-og.png"
              width="130"
              height="29"
              style={{ objectFit: "contain" }}
              className="d-inline-block align-top"
              alt="Bewakoof logo"
            />
          </Link>
        </Navbar.Brand>

        {/* <Space></Space>  */}
        <Burger />
      </Navbar>
    </Styles>
  );
}

export default Header;

// STYLED COMPONENTS

const Styles = styled.div`
  top: 0;
  z-index: 1;
  position: fixed;
  width: -webkit-fill-available;
  width: -moz-available;
  box-shadow: 0 4px 6px #18181844;

  .navbar-light .navbar-nav .nav-link {
    color: #000;
    font-size: 15px;
    font-weight: bold;
  }

  .form-inline {
    @media (max-device-width: 990px) {
      padding-left: 0;
    }
  }

  .form-control {
    ::placeholder {
      font-size: 10px;
      line-height: 12;
      overflow: visible;
    }
  }
`;
const Space = styled.div`
  width: 12%;
  height: 100%;
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    width: 0;
    height: 0;
  }
  @media (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 0;
    height: 0;
  }
`;
