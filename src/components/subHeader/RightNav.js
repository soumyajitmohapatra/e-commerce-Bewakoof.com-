import React from "react";
import styled from "styled-components";
import {
  AccountCircle,
  Favorite,
  LocalMall,
  ExitToApp,
  History,
  Notifications,
  Android,
} from "@material-ui/icons";
import {
  Badge,
  Fab,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  Divider,
} from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import { useStateValue } from "../../context/State";
import { auth } from "../../firebase";

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 2,
    top: 2,
    padding: "0 4px",
    fontWeight: "bolder",
    fontSize: "12.5px",
    minWidth: "18px",
    height: "18px",
    background: "rgba(253, 58, 103, 0.836)",
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "1rem",
  },
}));

const RightNav = ({ open }) => {
  const classes = useStyles();
  const history = useHistory();
  const [{ bag, user }] = useStateValue();
  const anchorRef = React.useRef(null);
  const [pop, setPop] = React.useState(false);

  const handleToggle = () => {
    setPop((prevPop) => !prevPop);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setPop(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setPop(false);
    }
  }

  const prevOpen = React.useRef(pop);
  React.useEffect(() => {
    if (prevOpen.current === true && pop === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = pop;
  }, [pop]);

  const handleLogout = () => {
    if (user) {
      auth.signOut();
      history.push("/");
    }
  };

  return (
    <Div open={open}>
      <DIV>
        <Link to="/men-clothing">
          <span className="menu">MEN</span>
        </Link>
        <Link to="/women-clothing">
          <span className="menu">WOMEN</span>
        </Link>
        <Link to="/mobile-covers">
          <span className="menu">MOBILE COVERS</span>
        </Link>
      </DIV>
      <Form inline style={{ display: "flex", flex: "1", paddingRight: "1rem" }}>
        <InputGroup style={{ display: "flex", flex: "1" }}>
          <FormControl
            disabled
            className="formControl"
            style={{
              background: "#ffff",
              placeholder: "fontSize:'10px'",
            }}
            placeholder="Search by product is !disabled for now "
            aria-describedby="basic-addon1"
          />
          <InputGroup.Prepend>
            <Button
              style={{
                background: "#1E1C19",
                borderStyle: "none",
                borderRadius: "0 5px 5px 0",
              }}
              type="submit"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 17 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#FFFF" fillRule="evenodd">
                  <path
                    className="_34RNph"
                    d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"
                  ></path>
                  <path
                    className="_34RNph"
                    d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"
                  ></path>
                </g>
              </svg>
            </Button>
          </InputGroup.Prepend>
        </InputGroup>
      </Form>
      <IconGroup>
        <Icon>
          {user ? (
            <>
              <Fab
                ref={anchorRef}
                onClick={handleToggle}
                className="fab"
                size="small"
                aria-label="account"
              >
                <Badge badgeContent="✔" color="secondary">
                  <AccountCircle style={{ color: "#000" }} />
                </Badge>
              </Fab>
              <Popper
                className={classes.root}
                open={pop}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper
                      style={{
                        background: "#F6F7F9",
                      }}
                    >
                      <h6 style={{ background: "#d9dadb", padding: ".3rem" }}>
                        <strong>Hello,</strong> <em>{user.displayName}</em>
                      </h6>

                      <ClickAwayListener onClickAway={handleClose}>
                        <MenuList
                          autoFocusItem={pop}
                          id="menu-list-grow"
                          onKeyDown={handleListKeyDown}
                        >
                          <Link exact to="/coming-soon">
                            <MenuItem onClick={handleClose}>
                              <AccountCircle
                                fontSize="small"
                                style={{ marginRight: ".4rem" }}
                              />
                              My Profile
                            </MenuItem>
                          </Link>
                          <Divider />
                          <Link exact to="/coming-soon">
                            <MenuItem onClick={handleClose}>
                              <History
                                fontSize="small"
                                style={{ marginRight: ".4rem" }}
                              />
                              Order History
                            </MenuItem>
                          </Link>
                          <Divider />

                          <Link exact to="/coming-soon">
                            <MenuItem onClick={handleClose}>
                              <Notifications
                                fontSize="small"
                                style={{ marginRight: ".4rem" }}
                              />
                              Notification
                            </MenuItem>
                          </Link>
                          <Divider />

                          <Link exact to="/coming-soon">
                            <MenuItem onClick={handleClose}>
                              <Android
                                fontSize="small"
                                style={{ marginRight: ".4rem" }}
                              />
                              Lorem-ipsum
                            </MenuItem>
                          </Link>
                          <Divider />
                          <Divider />
                          <Divider />
                          <Divider />

                          <div>
                            <Button
                              style={{ padding: "0.3rem 4.6rem" }}
                              variant="dark"
                              onClick={handleLogout}
                            >
                              <ExitToApp
                                fontSize="small"
                                style={{ marginRight: ".4rem" }}
                              />
                              Logout
                            </Button>
                          </div>
                        </MenuList>
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </>
          ) : (
            <Link to="/login">
              <Fab className="fab" size="small" aria-label="Account">
                <AccountCircle style={{ color: "#000" }} />
              </Fab>
            </Link>
          )}
        </Icon>
        {user ? (
          <>
            <Link to="/coming-soon">
              <SPAN>{user.displayName}</SPAN>
            </Link>
            <Link to="/coming-soon">
              <SPAN>MY ORDERs</SPAN>
            </Link>
          </>
        ) : (
          <Link to="/login">
            {!user ? (
              <Button
                className="loginlogout"
                variant="dark"
                onClick={handleLogout}
              >
                LOGIN/SIGNUP
              </Button>
            ) : (
              <></>
            )}
          </Link>
        )}
        <Link to="/wishlist">
          <Icon>
            <Fab className="fab" size="small" aria-label="Wishlist">
              <Favorite style={{ color: "#000" }} />
            </Fab>
          </Icon>
          <SPAN>WISHLIST</SPAN>
        </Link>
        <Link to="/bag">
          <Icon>
            <Fab className="fab" size="small" aria-label="Cart">
              <StyledBadge badgeContent={bag?.length} color="error">
                <LocalMall style={{ color: "#000" }} />
              </StyledBadge>
            </Fab>
          </Icon>
          <SPAN>BAG</SPAN>
        </Link>
        {user ? (
          <Button className="loginlogout" variant="dark" onClick={handleLogout}>
            LOGOUT
          </Button>
        ) : (
          <></>
        )}
      </IconGroup>
      <Space />
    </Div>
  );
};

export default RightNav;

const Div = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1;
  padding-left: 3%;

  .loginlogout {
    display: none;
    @media (max-width: 990px) {
      display: flex;
    }
  }
  .menu {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;

    color: #000;
    font-size: 70%;
    font-weight: bold;

    padding-right: 0.5rem;
    padding-left: 0.5rem;
    @media (max-width: 990px) {
      padding: 1rem 0;
    }
  }
  li {
    /* padding: 0 10px; */
    color: #000;
  }
  @media (max-width: 990px) {
    flex-flow: column nowrap;
    background-color: #ffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 4rem;
    padding-left: 0.5rem;
    transition: transform 0.3s ease-in-out;

    form {
      position: absolute;
    }
  }
`;
const IconGroup = styled.div`
  padding-left: 0.9rem;
  display: flex;
  align-items: center;
  flex-basis: 120px;
  justify-content: space-between;
  border-left: 3px solid #444444;
  @media (max-width: 990px) {
    border: none;
    display: grid;
    padding-left: 0;
    margin-top: 7rem;
    flex-basis: 270px;
  }
  li {
    font-size: 1.2rem;
    font-weight: bolder;
  }
  a,
  button {
    &:hover {
      text-decoration: none;
      color: #000;
    }
    &:focus {
      outline: none;
    }
  }
`;
const Icon = styled.span`
  .fab {
    margin-left: 0.4rem;
    background: rgba(255, 255, 255, 0.1);
    background-clip: padding-box;
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
    &:active {
      background: rgba(255, 255, 255, 0.5);
      transform: translateY(3px);
    }
  }

  @media (max-width: 990px) {
    display: none;
  }
`;
const SPAN = styled.div`
  display: none;
  text-transform: uppercase;
  margin-bottom: 1rem;
  @media (max-width: 990px) {
    display: grid;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    border-bottom: 3px solid #9e4446;
    width: max-content;
  }
`;

const DIV = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 990px) {
    display: grid;
    position: relative;
    top: 4rem;
    flex: 0.1;
    padding-left: 0;
  }

  a,
  span {
    text-decoration: none;
    &:hover {
      /* text-decoration: none; */
      color: #fd3a69;
    }
  }
`;
const Space = styled.div`
  width: 14%;
  /* height: 100%; */
  @media (min-device-width: 320px) and (max-device-width: 480px) {
    width: 0;
    height: 0;
  }
  @media (min-device-width: 768px) and (max-device-width: 1024px) {
    width: 0;
    height: 0;
  }
`;
