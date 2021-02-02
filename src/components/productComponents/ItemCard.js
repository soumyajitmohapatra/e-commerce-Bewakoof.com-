import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { useStateValue } from "../../context/State";
import { Catalog } from "../../Spinner";
import { Favorite, LocalMall, Star } from "@material-ui/icons";
import { toast } from "react-toastify";

function ItemCard({ id, pName, image, rating, price, originalPrice }) {
  const [{}, dispatch] = useStateValue();

  const Msg = () => (
    <>
      <div style={{ display: "flex" }}>
        <LocalMall fontSize="small" />
        <h6 >&nbsp; Product added to Bag</h6>
      </div>
    </>
  );

  const addToBag = () => {
    dispatch({
      type: "ADD_TO_BAG",
      item: {
        id: id,
        pName: pName,
        price: price,
        image: image,
        rating: rating,
        originalPrice: originalPrice,
      },
    });
    toast(Msg);
  };
  const addToWishlist = () => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      item: {
        id: id,
        pName: pName,
        price: price,
        image: image,
        rating: rating,
        originalPrice: originalPrice,
      },
    });
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timing = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timing);
  }, []);
  return (
    <>
      <Div key={id}>
        {loading ? (
          <Catalog />
        ) : (
          <Card>
            <Link to="/coming-soon">
              <Card.Img variant="top" src={image} alt={pName} />

              <Card.Body>
                <h3>{pName}</h3>
              </Card.Body>
            </Link>
            <div className="product-btns">
              <div to="/coming-soon" className="btn-small mr-2">
                ₹{price}
                <OriginalPrice id="price">{originalPrice}</OriginalPrice>
              </div>
              <RoundDiv>
                <div onClick={addToBag} className="btn-round  mr-2">
                  <LocalMall fontSize="small" />
                </div>
                <div onClick={addToWishlist} className="btn-round  mr-2">
                  <Favorite fontSize="small" />
                </div>
              </RoundDiv>
            </div>
            <div className="rating">
              {rating} <Star style={{ fontSize: 10 }} />
            </div>
          </Card>
        )}
      </Div>
    </>
  );
}

export default ItemCard;

const RoundDiv = styled.div`
  display: flex;
  @media (max-width: 990px) {
    display: grid;
    position: absolute;
    right: 0;
  }
`;

const Div = styled.div`
  margin-bottom: 1rem;
  padding: 0.45rem;
  background: transparent;
  h3 {
    font-size: 12px;
    font-weight: 500;
    @media (max-width: 990px) {
      font-size: 10px;
    }
  }
  h3,
  a {
    color: #292929;
    text-decoration: none;
    &:hover {
      color: #7289ab;
    }
  }
  .card {
    width: 14rem;
    height: 25.5rem;
    border: none;
    box-shadow: inset 3px 3px 8px #dbdbdb, inset -6px -6px 12px #ffffff;
    padding: 20px;
    border-radius: 12px;
    margin-bottom: 30px;
    &:hover {
      box-shadow: 6px 6px 12px #b8b8b8, -6px -6px 12px #ffffff;
    }
    @media (max-width: 990px) {
      width: 11rem;
      height: 22rem;
      margin-bottom: 0.8rem;
    }
  }
  .rating {
    width: 47px;
    background: rgba(253, 184, 39, 0.5);
    border-radius: 26px;
    font-size: 10px;
    font-weight: bolder;
    padding: 3px;
    text-align: center;
    margin-top: 0.7rem;
    margin-left: 0.2rem;
    @media (max-width: 990px) {
      position: relative;
      top: 9px;
    }
  }
  .card-img-top {
    margin-bottom: 5px;
    display: inline-block;
    /* max-width: 100%; */
    /* height: 13rem; */
  }

  .card-body {
    /* margin-bottom: 20px; */
    text-align: center;
    align-items: center;
    padding: 1rem 0.5rem;
  }

  .product-btns {
    display: flex;
    justify-content: center;
  }
  .btn-small {
    display: inline-block;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 50px;
    box-shadow: inset -2px -2px 8px white,
      inset -2px -2px 12px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      inset 2px 2px 8px rgba(0, 0, 0, 0.15);
    transition: 0.4s;
    &:hover {
      box-shadow: -2px -2px 8px white, -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        2px 2px 8px rgba(0, 0, 0, 0.15);
      color: #7289ab;
      text-decoration: none;
    }
    @media (max-width: 990px) {
      position: relative;
      right: 1.5rem;
      top: 5px;
    }
  }

  .btn-round {
    cursor: pointer;
    display: inline-block;
    font-weight: 700;
    font-size: 14px;
    text-transform: uppercase;
    height: 2.2rem;
    width: 3rem;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    text-decoration: none;
    box-shadow: -2px -2px 8px white, -2px -2px 12px rgba(255, 255, 255, 0.5),
      inset 2px 2px 4px rgba(255, 255, 255, 0.1),
      2px 2px 8px rgba(0, 0, 0, 0.15);
    &:hover {
      box-shadow: inset -2px -2px 8px white,
        inset -2px -2px 12px rgba(255, 255, 255, 0.5),
        inset 2px 2px 4px rgba(255, 255, 255, 0.1),
        inset 2px 2px 8px rgba(0, 0, 0, 0.15);
      color: #7289ab;
    }
    @media (max-width: 990px) {
      margin-bottom: 0.5rem;
    }
  }
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  font-size: 10px;
  font-weight: 100;
  color: #7e818c;
  padding: 0 0.2rem;
`;
