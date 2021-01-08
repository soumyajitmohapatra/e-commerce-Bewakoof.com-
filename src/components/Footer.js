import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Col,
  Container,
  Row,
  ListGroup,
  Form,
  InputGroup,
  Image,
} from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Apple,
} from "@material-ui/icons";

function Footer() {
  return (
    <Container fluid style={{ padding: "0", paddingTop: "5rem" }}>
      <FOOTER>
        <section>
          <Credit>
            <h5>Made with passion by :  </h5>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linktr.ee/so_mya_jit"
            >
              <h6 className="neon"> @so_mya_jit</h6>
            </a>
          </Credit>
          <Row>
            <Col sm={6} md={3}>
              <Heading>CUSTOMER SERVICE</Heading>
              <ListGroup>
                <Ul>
                  <Link to="/coming-soon">Contact Us</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">Track Order</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">Return Order</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">Cancel Order</Link>
                </Ul>
              </ListGroup>
            </Col>
            <Col sm={6} md={3}>
              <Heading>COMPANY</Heading>
              <ListGroup>
                <Ul>
                  <Link to="/coming-soon">About Us</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">We're Hiring</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">Terms and Condtions</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">Privacy Policy</Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">Blog</Link>
                </Ul>
              </ListGroup>
            </Col>
            <Col sm={6} md={3}>
              <Heading>CONNECT WITH US</Heading>
              <ListGroup>
                <Ul>
                  <Link to="/coming-soon">
                    <Facebook /> 4.7M People Like us
                  </Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">
                    <Instagram /> 1M Followers
                  </Link>
                </Ul>
                <Ul>
                  <Link to="/coming-soon">
                    <Twitter />
                  </Link>
                  <Link to="/coming-soon">
                    <Pinterest />
                  </Link>
                  <Link to="/coming-soon">
                    <Apple />
                  </Link>
                </Ul>
              </ListGroup>
            </Col>
            <Col sm={6} md={3}>
              <Heading style={{ paddingBottom: "1rem" }}>
                KEEP UP TO DATE
              </Heading>
              <ListGroup>
                <Ul>
                  <Form inline>
                    <InputGroup>
                      <Emailinput placeholder="Enter Mail Id"></Emailinput>
                      <InputGroup.Prepend>
                        <BUTTON type="submit">SUBSCRIBE</BUTTON>
                      </InputGroup.Prepend>
                    </InputGroup>
                  </Form>
                </Ul>
              </ListGroup>
            </Col>
          </Row>
        </section>
        <section style={{ paddingTop: "4rem" }}>
          <Row>
            <Col sm={6} md={3}>
              <Heading>CUSTOMER SERVICE</Heading>
              <ListGroup>
                <Ul>
                  <small>
                    <i className="fa fa-repeat" aria-hidden="true"></i>
                  </small>
                  <Link style={{ paddingLeft: "5px" }} to="/coming-soon">
                    <big>15 Days Return Policy</big>
                  </Link>
                </Ul>
                <Ul>
                  <small>
                    <i className="fa fa-inr" aria-hidden="true"></i>
                  </small>
                  <Link style={{ paddingLeft: "5px" }} to="/coming-soon">
                    <big>Cash On Delivery</big>
                  </Link>
                </Ul>
              </ListGroup>
            </Col>
            <Col sm={6} md={3}>
              <Heading>DOWNLOAD THE APP</Heading>
              <ListGroup>
                <Ul>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    style={{ paddingRight: ".5rem" }}
                    href="https://play.google.com/store/apps/details?id=com.bewakoof.bewakoof&hl=en"
                  >
                    <Image
                      width="100px"
                      src="https://images.bewakoof.com/web/app_android_v1.png"
                      alt="sbjb"
                      thumbnail
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://apps.apple.com/in/app/bewakoof/id1100190514"
                  >
                    <Image
                      width="100px"
                      src="https://images.bewakoof.com/web/app_ios_v1.png"
                      alt="sbjb"
                      thumbnail
                    />
                  </a>
                </Ul>
              </ListGroup>
            </Col>
            <Col style={{ padding: "8px 10px" }} sm={12} md={6}>
              <Heading>100% Secure Connection</Heading>
              <Ul>
                <Image
                  width="300px"
                  src="https://images.bewakoof.com/web/secure-payments-image.png"
                  alt="sbjb"
                  fluid
                />
              </Ul>
            </Col>
          </Row>
        </section>
      </FOOTER>
    </Container>
  );
}

export default Footer;

// bg #181818

const FOOTER = styled.div`
  padding: 2% 12% 2% 11%;

  background-color: #181818;
  color: #ffff;

  a {
    margin: 0;
    padding: 0;
    font-size: 10px;
    font-weight: 500;
    vertical-align: baseline;
    background: transparent;
    color: #ffff;
    outline: none;
    &:hover {
      color: #ffff;
      text-decoration: none;
    }
  }
  .col-md-3,
  .col-sm-6 {
    padding: 8px 10px;
  }
  .list-group {
    background-color: transparent;
    color: #ffff;
    border: none;
  }
`;

const Ul = styled.ul`
  list-style-type: none;
  margin-bottom: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  padding-inline-start: 0px;
`;

const Heading = styled.h5`
  color: #fdb827;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 14px;
  display: block;
`;

const Emailinput = styled.input`
  background: transparent;
  border: 0;
  border-bottom-style: solid;
  color: #ffff;
  width: 55%;
  border-color: #fdb827;
  border-bottom-width: 1px;
  &:focus {
    outline: 0;
  }
`;

const BUTTON = styled.button`
  border: none;
  background-color: #fdb827;
  padding: 0.3rem 0.8rem;
  border-radius: 2px;
  font-size: 14px;
  font-weight: 500;
`;

const Credit = styled.div`
  position: relative;
  right: 0.5rem;
  margin-bottom: 2%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-style: italic;
  border-bottom: 2px solid #fff;
  h5 {
    color: #fdb827;
    margin-right: 10px;
    font-size: 16px;
    text-transform: uppercase;
  }
  .neon {
    color: #fb4264;
    font-size: 12px;
    text-shadow: 0 0 3px #f40a35;
    animation: neon 1s ease infinite;
    -moz-animation: neon 1s ease infinite;
    -webkit-animation: neon 1s ease infinite;

    @keyframes neon {
      0%,
      100% {
        text-shadow: 0 0 2px #fa1c16, 0 0 3px #fa1c16, 0 0 10px #fa1c16,
          0 0 10px #fa1c16, 0 0 1px #fed128, 1px 1.2px 1px #806914;
        color: #fed128;
      }
      50% {
        text-shadow: 0 0 3px #800e0b, 0 0 1.5px #800e0b, 0 0 5px #800e0b,
          0 0 5px #800e0b, 0 0 0.2px #800e0b, 0.4px 1px 1px #40340a;
        color: #806914;
      }
    }
  }
  a {
    &:hover {
      text-decoration: underline;
    }
  }
`;
