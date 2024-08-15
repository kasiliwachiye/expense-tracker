import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import auth from "../auth/auth-helper";
import {
  currentMonthPreview,
  expenseByCategory,
} from "./../expense/api-expense.js";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "auto",
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(5),
}));

const Title2 = styled(Typography)(({ theme }) => ({
  padding: `32px ${theme.spacing(2.5)}px 2px`,
  color: "#2bbd7e",
  textAlign: "center",
}));

const TotalSpent = styled(Typography)(({ theme }) => ({
  padding: "50px 40px",
  fontSize: "4em",
  margin: 20,
  marginBottom: 30,
  backgroundColor: "#769FCD",
  color: "#F7FBFC",
  textAlign: "center",
  borderRadius: "50%",
  border: "10px double #F7FBFC",
  fontWeight: 300,
}));

const CategorySection = styled("div")(({ theme }) => ({
  padding: 25,
  paddingTop: 16,
  margin: "auto",
}));

const CatDiv = styled(Divider)(({ theme }) => ({
  height: "4px",
  margin: "0",
  marginBottom: 8,
}));

const Val = styled(Typography)(({ theme }) => ({
  width: 200,
  display: "inline-table",
  textAlign: "center",
  margin: 2,
}));

const CatTitle = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  padding: 10,
  backgroundColor: "#f4f6f9",
}));

const CatHeading = styled(Typography)(({ theme }) => ({
  color: "#6b6b6b",
  fontSize: "1.15em",
  backgroundColor: "#f7f7f7",
  padding: "4px 0",
}));

const Spent = styled(Typography)(({ theme }) => ({
  margin: "16px 10px 10px 0",
  padding: "10px 30px",
  border: "4px solid #58bd7f38",
  borderRadius: "0.5em",
}));

const Day = styled(Typography)(({ theme }) => ({
  fontSize: "0.9em",
  fontStyle: "italic",
  color: "#696969",
}));

export default function ExpenseOverview() {
  const [expensePreview, setExpensePreview] = useState({
    month: 0,
    today: 0,
    yesterday: 0,
  });
  const [expenseCategories, setExpenseCategories] = useState([]);

  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    currentMonthPreview({ t: jwt.token }, signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true);
      } else {
        setExpensePreview(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    expenseByCategory({ t: jwt.token }, signal).then((data) => {
      if (data.error) {
        setRedirectToSignin(true);
      } else {
        setExpenseCategories(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const indicateExpense = (values) => {
    let color = "#4f83cc";
    if (values.total) {
      const diff = values.total - values.average;
      if (diff > 0) {
        color = "#e9858b";
      }
      if (diff < 0) {
        color = "#2bbd7e";
      }
    }
    return color;
  };

  return (
    <StyledCard>
      <Title2 variant="h4" color="textPrimary">
        You've spent
      </Title2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TotalSpent component="span">
          ${expensePreview.month ? expensePreview.month.totalSpent : "0"}{" "}
          <span style={{ display: "block", fontSize: "0.3em" }}>
            so far this month
          </span>
        </TotalSpent>
        <div style={{ margin: "20px 20px 20px 30px" }}>
          <Spent variant="h5" color="primary">
            ${expensePreview.today ? expensePreview.today.totalSpent : "0"}{" "}
            <Day component="span">today</Day>
          </Spent>
          <Spent variant="h5" color="primary">
            $
            {expensePreview.yesterday
              ? expensePreview.yesterday.totalSpent
              : "0"}{" "}
            <Day component="span">yesterday </Day>
          </Spent>
          <Link to="/expenses/all">
            <Typography variant="h6">See more</Typography>
          </Link>
        </div>
      </div>
      <Divider />
      <CategorySection>
        {expenseCategories.map((expense, index) => {
          return (
            <div
              key={index}
              style={{ display: "grid", justifyContent: "center" }}
            >
              <CatTitle variant="h5">{expense._id}</CatTitle>
              <CatDiv
                style={{
                  backgroundColor: indicateExpense(expense.mergedValues),
                }}
              />
              <div>
                <CatHeading component="span" className={Val}>
                  past average
                </CatHeading>
                <CatHeading component="span" className={Val}>
                  this month
                </CatHeading>
                <CatHeading component="span" className={Val}>
                  {expense.mergedValues.total &&
                  expense.mergedValues.total - expense.mergedValues.average > 0
                    ? "spent extra"
                    : "saved"}
                </CatHeading>
              </div>
              <div style={{ marginBottom: 3 }}>
                <Val
                  component="span"
                  style={{ color: "#595555", fontSize: "1.15em" }}
                >
                  ${expense.mergedValues.average}
                </Val>
                <Val
                  component="span"
                  style={{
                    color: "#002f6c",
                    fontSize: "1.6em",
                    backgroundColor: "#eafff5",
                    padding: "8px 0",
                  }}
                >
                  ${expense.mergedValues.total ? expense.mergedValues.total : 0}
                </Val>
                <Val
                  component="span"
                  style={{ color: "#484646", fontSize: "1.25em" }}
                >
                  $
                  {expense.mergedValues.total
                    ? Math.abs(
                        expense.mergedValues.total -
                          expense.mergedValues.average
                      )
                    : expense.mergedValues.average}
                </Val>
              </div>
              <Divider style={{ marginBottom: 10 }} />
            </div>
          );
        })}
      </CategorySection>
    </StyledCard>
  );
}
