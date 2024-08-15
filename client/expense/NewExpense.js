import React, { useState } from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import auth from "../auth/auth-helper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import { create } from "./api-expense.js";
import { Link, Redirect } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@mui/lab";

const StyledCard = styled(Card)({
  maxWidth: 600,
  margin: "auto",
  textAlign: "center",
  marginTop: 32,
  paddingBottom: 16,
});

const StyledTitle = styled(Typography)({
  marginTop: 16,
  color: "#3f51b5", // Replaces theme.palette.openTitle
  fontSize: "1em",
});

const StyledTextField = styled(TextField)({
  marginLeft: 8,
  marginRight: 8,
  width: 300,
});

const SubmitButton = styled(Button)({
  margin: "auto",
  marginBottom: 16,
});

const ErrorIcon = styled(Icon)({
  verticalAlign: "middle",
});

function NewExpense() {
  const [values, setValues] = useState({
    title: "",
    category: "",
    amount: "",
    incurred_on: new Date(),
    notes: "",
    error: "",
  });
  const jwt = auth.isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleDateChange = (date) => {
    setValues({ ...values, incurred_on: date });
  };

  const clickSubmit = () => {
    const expense = {
      title: values.title || undefined,
      category: values.category || undefined,
      amount: values.amount || undefined,
      incurred_on: values.incurred_on || undefined,
      notes: values.notes || undefined,
    };
    create(
      {
        t: jwt.token,
      },
      expense
    ).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, error: "", redirect: true });
      }
    });
  };

  if (values.redirect) {
    return <Redirect to={"/"} />;
  }

  return (
    <div>
      <StyledCard>
        <CardContent>
          <StyledTitle variant="h6" component="h2">
            Expense Record
          </StyledTitle>
          <br />
          <StyledTextField
            id="title"
            label="Title"
            value={values.title}
            onChange={handleChange("title")}
            margin="normal"
          />
          <br />
          <StyledTextField
            id="amount"
            label="Amount ($)"
            value={values.amount}
            onChange={handleChange("amount")}
            margin="normal"
            type="number"
          />
          <br />
          <StyledTextField
            id="category"
            label="Category"
            value={values.category}
            onChange={handleChange("category")}
            margin="normal"
          />
          <br />
          <br />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DateTimePicker
              label="Incurred on"
              views={["year", "month", "date"]}
              value={values.incurred_on}
              onChange={handleDateChange}
              showTodayButton
            />
          </MuiPickersUtilsProvider>
          <br />
          <br />
          <StyledTextField
            id="multiline-flexible"
            label="Notes"
            multiline
            rows="2"
            value={values.notes}
            onChange={handleChange("notes")}
            margin="normal"
          />
          <br />
          <br />
          {values.error && (
            <Typography component="p" color="error">
              <ErrorIcon color="error">error</ErrorIcon>
              {values.error}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <SubmitButton
            color="primary"
            variant="contained"
            onClick={clickSubmit}
          >
            Submit
          </SubmitButton>
          <Link to="/myauctions">
            <Button variant="contained">Cancel</Button>
          </Link>
        </CardActions>
      </StyledCard>
    </div>
  );
}

export default NewExpense;
