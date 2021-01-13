import React from "react";
import styled from "styled-components";
import { useStateValue } from "../../context/State";
import DeleteForever from "@material-ui/icons/DeleteForever";
import { Rating } from "@material-ui/lab";

import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@material-ui/core";

function Product({ id, pName, image, price, originalPrice, rating }) {
  const [{  }, dispatch] = useStateValue();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const removeItem = () => {
    dispatch({
      type: "REMOVE_FROM_BAG",
      id: id,
    });
  };

  const addToWishlist = () => {
    dispatch({
      type: "REMOVE_FROM_BAG",
      id: id,
    });
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

  return (
    <PRODUCT key={id}>
      <img
        style={{ objectFit: "contain" }}
        height="200"
        width="200"
        alt="produt-img"
        src={image}
      />
      <div key={id}>
        <h5>{pName}</h5>
        <Rating size="small" name="read-only" value={rating} readOnly />

        <div>
          <span>
            <small>Rs. </small> <strong>{price}</strong>
          </span>
          <OriginalPrice>{originalPrice}</OriginalPrice>
        </div>

        {/* <div style={{ display: "flex", margin: ".6rem 0 .9rem 0" }}>
          <Btn>
            <BUTTON>S</BUTTON>
          </Btn>
          <Btn>
            <BUTTON>M</BUTTON>
          </Btn>
          <Btn>
            <BUTTON>L</BUTTON>
          </Btn>
          <Btn>
            <BUTTON>XL</BUTTON>
          </Btn>
        </div> */}

        <Delete onClick={handleClickOpen}>
          <DeleteForever />
        </Delete>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            <h6 style={{ color: "#181818", fontWeight: "bolder" }}>
              REMOVE ITEM
            </h6>
          </DialogTitle>
          <Line></Line>

          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p style={{ fontSize: "13px", fontWeight: "600",color: "#181818" }}>
                Are you sure you want to remove this item ?
              </p>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={addToWishlist}>
              <span style={{ fontWeight: "600" }} onClick={handleClose}>
                Add to Wishlist
              </span>
            </Button>
            <Button onClick={removeItem}>
              <span style={{ fontWeight: "600" }} onClick={handleClose}>
                Delete
              </span>
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </PRODUCT>
  );
}

export default Product;

const Line = styled.div`
  height: 2px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 6px;
`;

const PRODUCT = styled.div`
  width: 100%;
  max-height: 100%;
  display: flex;
  margin-top: 1rem;
  flex: 1;
  .MuiDialogTitle-root {
    padding: 16px 25px 5px 25px;
  }
`;
const Delete = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  padding-bottom: 0;
  color: grey;

  :active,
  :hover,
  :focus {
    outline: none;
    color: #000;
    transform: translateY(3px);
  }
`;
// const Btn = styled.div`
//   margin-right: 8px;
// `;
// const BUTTON = styled.button`
//   background-color: #fff;
//   border: 1px solid #bfc0c6;
//   border-radius: 50px;
//   padding: 0;
//   min-width: 30px;
//   height: 30px;
//   text-align: center;
//   cursor: pointer;
//   color: #282c3f;
//   &:focus {
//     border-color: #fd3a69;
//     outline: none;
//     color: #fd3a69;
//   }
// `;
const OriginalPrice = styled.span`
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 100;
  color: #7e818c;
  padding: 0 0.2rem;
`;
