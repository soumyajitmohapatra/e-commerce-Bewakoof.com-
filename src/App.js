import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Card } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import MenClothing from "./components/productComponents/MenClothing";
import WomenClothing from "./components/productComponents/WomenClothing";
import MobileCovers from "./components/productComponents/MobileCovers";
import AllClothing from "./components/productComponents/AllClothing";

import Checkout from "./components/checkouts/Checkout";
// import ProductInfo from "./components/checkouts/ProductInfo";
import Login from "./components/subHeader/Login";
import Signup from "./components/subHeader/Signup";
import { auth } from "./firebase";
import { useStateValue } from "./context/State";
import Wishlist from "./components/checkouts/Wishlist";

function App() {
  const [{ product }, dispatch] = useStateValue();

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
        <>
          <Header />

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
              <Route path="/coming-soon">
                <div
                  style={{
                    marginTop: "7rem",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Card style={{ width: "50%" }}>
                    <Card.Body
                      style={{
                        background: "#d9dadb",
                        textTransform: "uppercase",
                      }}
                    >
                      <Card.Text>
                        <strong>
                          Some features are under construction will be here
                          soon.......
                        </strong>
                      </Card.Text>
                    </Card.Body>
                    <Card.Img
                      variant="bottom"
                      src="https://image.freepik.com/free-vector/group-people-shouting-megaphone-with-coming-soon-word-illustration-concept_78434-97.jpg"
                    />
                  </Card>
                </div>
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
