import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import styled from "styled-components";
import { auth } from "./firebase";
import { useStateValue } from "./context/State";
// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MenClothing from "./components/productComponents/MenClothing";
import WomenClothing from "./components/productComponents/WomenClothing";
import MobileCovers from "./components/productComponents/MobileCovers";
import AllClothing from "./components/productComponents/AllClothing";
import Checkout from "./components/checkouts/Checkout";
import Login from "./components/subHeader/Login";
import Signup from "./components/subHeader/Signup";
import Wishlist from "./components/checkouts/Wishlist";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signUp">
          <Signup />
        </Route>
        <Route path="/coming-soon">
          <ComingSoon>
            <div className="card">
              <div
                style={{
                  background: "#d9dadb",
                  textTransform: "uppercase",
                  padding: "2rem 0",
                }}
              >
                <strong>
                  Some features are under construction will be here soon.......
                </strong>
              </div>
              <img
                alt="coming-soon"
                src="https://image.freepik.com/free-vector/group-people-shouting-megaphone-with-coming-soon-word-illustration-concept_78434-97.jpg"
              />
              <Link className="home" to="/">
                🏠 HOME
              </Link>
            </div>
          </ComingSoon>
        </Route>
        <>
          <Header />
          <Toast>
            <ToastContainer style={{ top: "4rem" }} autoClose={2000} />
          </Toast>
          <div style={{ minHeight: "100vh" }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/random-sales">
                <AllClothing />
              </Route>
              <Route exact path="/men-clothing">
                <MenClothing />
              </Route>
              <Route exact path="/women-clothing">
                <WomenClothing />
              </Route>
              <Route exact path="/mobile-covers">
                <MobileCovers />
              </Route>
              <Route exact path="/bag">
                <Checkout />
              </Route>
              <Route path="/wishlist">
                <Wishlist />
              </Route>
            </Switch>
          </div>
          <Footer />
        </>
      </Switch>
    </Router>
  );
}

export default App;

const ComingSoon = styled.div`
  text-align: center;

  .card {
    width: 55%;
    margin: 2rem auto;
    @media (min-device-width: 320px) and (max-device-width: 480px) {
      width: 100%;
    }
  }
  .home {
    padding: 1rem;
    text-transform: uppercase;
    text-decoration: none;
    &:hover {
      color: red;
    }
  }
`;
const Toast = styled.div`
  .Toastify__toast {
    margin-bottom: 1rem;
  }
  .Toastify__close-button--default {
    color: #fff;
  }

  .Toastify__toast-container {
    @media (max-width: 990px) {
      width: 15rem;
    }
  }
  .Toastify__toast--default {
    background: rgba(24, 24, 24, 0.8);
    color: #fff;
  }
`;
