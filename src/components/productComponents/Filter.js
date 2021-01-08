import React, { useState, useEffect } from "react";
import { MyLoader } from "../../Spinner";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";

const Filter = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timing);
  }, []);
  return (
    <Div>
      {loading ? (
        <MyLoader />
      ) : (
        <section>
          <h4>Filters</h4>
          <SPACE />
          <section>
            <section>
              <Heading>
                <h6>Category</h6>
              </Heading>
              <Category>
                <ul>
                  <li
                    style={{
                      listStyle: "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label>T-shirt</label>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label>Sweatshirt</label>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label>Jacket</label>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label>Hoodies</label>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label>Sweater</label>
                  </li>
                  <li
                    style={{
                      listStyle: "none",
                      justifyContent: "space-between",
                    }}
                  >
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="new"
                    />
                    <label>Shirt</label>
                  </li>
                </ul>
              </Category>
            </section>
            <section className="mb-4">
              <Heading>
                <h6>Avg. Customer Review</h6>
              </Heading>
              <AvgReview>
                <ul className="rating">
                  <li>
                    <Rating
                      name="size-small"
                      size="small"
                      defaultValue={5}
                      readOnly
                    />
                  </li>
                  <li>
                    <p className="small text-uppercase card-link-secondary px-2">
                      & Up
                    </p>
                  </li>
                </ul>
                <ul className="rating">
                  <li>
                    <Rating
                      name="size-small"
                      size="small"
                      defaultValue={4}
                      readOnly
                    />
                  </li>
                  <li>
                    <p className="small text-uppercase card-link-secondary px-2">
                      & Up
                    </p>
                  </li>
                </ul>
                <ul className="rating">
                  <li>
                    <Rating
                      name="size-small"
                      size="small"
                      defaultValue={3}
                      readOnly
                    />
                  </li>
                  <li>
                    <p className="small text-uppercase card-link-secondary px-2">
                      & Up
                    </p>
                  </li>
                </ul>
                <ul className="rating">
                  <li>
                    <Rating
                      name="size-small"
                      size="small"
                      defaultValue={2}
                      readOnly
                    />
                  </li>
                  <li>
                    <p className="small text-uppercase card-link-secondary px-2">
                      & Up
                    </p>
                  </li>
                </ul>
              </AvgReview>
            </section>
            <section className="mb-4">
              <Heading>
                <h6>Price</h6>
              </Heading>
              <Price>
                <ul>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="under25"
                      name="materialExampleRadios"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      Under ₹350
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="2550"
                      name="materialExampleRadios"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      ₹350 to ₹500
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="50100"
                      name="materialExampleRadios"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      ₹500 to ₹900
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="100200"
                      name="materialExampleRadios"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      ₹900 to ₹1500
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      className="form-check-input"
                      id="200above"
                      name="materialExampleRadios"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      ₹1500 & Above
                    </label>
                  </li>
                </ul>
              </Price>
              <form>
                <div className="d-flex align-items-center mt-4 pb-1">
                  <div className="md-form md-outline my-0">
                    <input
                      id="from"
                      type="text"
                      className="form-control mb-0"
                    />
                    <label>₹ Min</label>
                  </div>
                  <p className="px-2 mb-0 text-muted"> - </p>
                  <div className="md-form md-outline my-0">
                    <input id="to" type="text" className="form-control mb-0" />
                    <label>₹ Max</label>
                  </div>
                </div>
              </form>
            </section>

            <section className="mb-4">
              <Heading>
                <h6>Size</h6>
              </Heading>
              <Size>
                <ul>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="34"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      34
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="36"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      36
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="38"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      38
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="40"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      40
                    </label>
                  </li>

                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="42"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      42
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="44"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      44
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="46"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      46
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      className="form-check-input filled-in"
                      id="50"
                    />
                    <label className="form-check-label small text-uppercase card-link-secondary">
                      50
                    </label>
                  </li>
                </ul>
              </Size>
            </section>
            <section className="mb-4">
              <Heading>
                <h6>Color</h6>
              </Heading>
              <Color>
                <Box bgcolor="primary.main" component="div" p={2}></Box>
                <Box bgcolor="secondary.main" component="div" p={2}></Box>
                <Box bgcolor="error.main" component="div" p={2}></Box>
                <Box bgcolor="warning.main" component="div" p={2}></Box>
                <Box bgcolor="info.main" component="div" p={2}></Box>
                <Box bgcolor="success.main" component="div" p={2}></Box>
                <Box bgcolor="text.primary" component="div" p={2}></Box>
                <Box bgcolor="text.secondary" component="div" p={2}></Box>
                <Box bgcolor="text.disabled" component="div" p={2}></Box>
              </Color>
            </section>
          </section>
        </section>
      )}
    </Div>
  );
};
export default Filter;

const SPACE = styled.div`
  margin-bottom: 1rem;
  height: 1px;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
`;

const Heading = styled.div``;

const Div = styled.div`
  max-width: 30%;
  text-transform: uppercase;
  .rating {
    list-style: none;
    padding: 0;
  }
`;
const Category = styled.div`
  ul {
    padding-left: 18px;
  }
`;
const AvgReview = styled.div`
  ul {
    display: flex;
  }
`;

const Price = styled.div`
  ul {
    padding-left: 18px;
  }
`;

const Size = styled.div`
  ul {
    
    padding-left: 18px;
  }
`;

const Color = styled.div`
  display: flex;
  flex-wrap: wrap;
  .MuiBox-root,
  .MuiBox-root-40 {
    width: 1rem;
    margin: 0.4rem;
  }
`;
