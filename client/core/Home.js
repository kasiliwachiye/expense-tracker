import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import moneyImg from "./../assets/images/money.jpg";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import ExpenseOverview from "./../expense/ExpenseOverview";

const CardStyled = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const Title = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(
    2
  )}px`,
  color: theme.palette.openTitle,
}));

const Media = styled(CardMedia)({
  minHeight: 440,
});

const Credit = styled("div")({
  padding: 10,
  textAlign: "right",
  backgroundColor: "#ededed",
  borderBottom: "1px solid #d0d0d0",
  "& a": {
    color: "#4f83cc",
  },
});

export default function Home() {
  return (
    <>
      {auth.isAuthenticated() && <ExpenseOverview />}
      {!auth.isAuthenticated() && typeof window !== "undefined" && (
        <CardStyled>
          <Title variant="h6" style={{ fontSize: "1em" }}>
            <em>Never spend your money before you have it.</em> -Thomas
            Jefferson
          </Title>
          <Media image={moneyImg} title="Money" />

          <CardContent>
            <Typography variant="body1" component="p">
              Welcome to the Pochi, your reliable expense tracker.{" "}
              <Link to="/signup">Sign up</Link> or{" "}
              <Link to="/signin">sign in</Link> to get started.
            </Typography>
          </CardContent>
        </CardStyled>
      )}
    </>
  );
}
