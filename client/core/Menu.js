import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/AddBoxRounded";
import Button from "@material-ui/core/Button";
import auth from "./../auth/auth-helper";
import { Link, useNavigate, useLocation } from "react-router-dom";

const isActive = (location, path) => {
  if (location.pathname === path) return { color: "#69f0ae" };
  else return { color: "#ffffff" };
};

const isButtonActive = (location, path) => {
  if (location.pathname.includes(path))
    return { color: "#fffde7", backgroundColor: "#2bbd7e", marginRight: 10 };
  else
    return {
      color: "#2bbd7e",
      backgroundColor: "#ffffff",
      border: "1px solid #2bbd7e",
      marginRight: 10,
    };
};

function Menu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Pochi
        </Typography>
        <div>
          <Link to="/">
            <IconButton aria-label="Home" style={isActive(location, "/")}>
              <HomeIcon />
            </IconButton>
          </Link>
          {auth.isAuthenticated() && (
            <span>
              <Link to="/expenses/all">
                <Button style={isActive(location, "/expenses/all")}>
                  Expenses
                </Button>
              </Link>
              <Link to="/expenses/reports">
                <Button style={isActive(location, "/expenses/reports")}>
                  Reports
                </Button>
              </Link>
            </span>
          )}
        </div>
        <div style={{ position: "absolute", right: "10px" }}>
          <span style={{ float: "right" }}>
            {!auth.isAuthenticated() && (
              <span>
                <Link to="/signup">
                  <Button style={isActive(location, "/signup")}>Sign up</Button>
                </Link>
                <Link to="/signin">
                  <Button style={isActive(location, "/signin")}>Sign In</Button>
                </Link>
              </span>
            )}
            {auth.isAuthenticated() && (
              <span>
                <Link to="/expenses/new">
                  <Button style={isButtonActive(location, "/expenses/new")}>
                    <AddIcon style={{ marginRight: 4 }} /> Add Expense
                  </Button>
                </Link>
                <Link to={"/user/" + auth.isAuthenticated().user._id}>
                  <Button
                    style={isActive(
                      location,
                      "/user/" + auth.isAuthenticated().user._id
                    )}
                  >
                    My Profile
                  </Button>
                </Link>
                <Button
                  color="inherit"
                  onClick={() => {
                    auth.clearJWT(() => navigate("/"));
                  }}
                >
                  Sign out
                </Button>
              </span>
            )}
          </span>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Menu;
