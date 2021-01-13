import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import { useStateValue } from "../../context/State";
import { DeleteForever, LocalMall, Star } from "@material-ui/icons";

function CARD({ id, pName, image, rating, price, originalPrice }) {
  const [{}, dispatch] = useStateValue();

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
  };
  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      item: {
        id: id,
      },
    });
  };
  return (
    <Card key={id}>
      <Link to="/coming-soon">
        <Card.Img variant="top" src={image} alt={pName} />

        <Card.Body key={id}>
          <h3>{pName}</h3>
        </Card.Body>
      </Link>
      <div key={id} className="product-btns">
        <div to="/coming-soon" className="btn-small mr-2">
          ₹{price}
          <OriginalPrice id="price">{originalPrice}</OriginalPrice>
        </div>
        <RoundDiv>
          <div onClick={addToBag} className="btn-round  mr-2">
            <LocalMall fontSize="small" />
          </div>
          <div onClick={removeItem} className="btn-round  mr-2">
            <DeleteForever fontSize="small" />
          </div>
        </RoundDiv>
      </div>
      <div className="rating">
        {rating} <Star style={{ fontSize: 10 }} />
      </div>
    </Card>
  );
}

function Wishlist() {
  const [{ wishlist }] = useStateValue();
  const wishlistLength = wishlist.length;
  return (
    <Container>
      <Title>
        <span
          style={{
            position: "absolute",
            left: "0rem",
          }}
        >
          <h1>My Wishlist</h1>
          <div
            style={{
              height: ".2rem",
              width: "9rem",
              background: "#fdb827",
              borderRadius: "15%",
            }}
          ></div>
        </span>
      </Title>
      {wishlistLength === 0 ? (
        <Emptybag>
          <div>
            <img
              alt="duhud"
              src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png"
              height="526"
              width="600"
            />
          </div>
        </Emptybag>
      ) : (
        <Div>
          {wishlist.map((item) => (
            <CARD
              key={item.id}
              id={item.id}
              pName={item.pName}
              image={item.image}
              rating={item.rating}
              price={item.price}
              originalPrice={item.originalPrice}
            />
          ))}
        </Div>
      )}
    </Container>
  );
}

export default Wishlist;

const Emptybag = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  @media (max-width: 990px) {
    margin-top: 20%;
  }
  img {
    object-fit: contain;
    width: 100%;
  }
`;
const Title = styled.div`
  position: relative;

  @media (max-width: 990px) {
    display: none;
  }
`;
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
  margin-top: 5rem;
  padding: 0.45rem;
  background: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    margin-left: 1rem;
    margin-top: 5rem;
    width: 14rem;
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
