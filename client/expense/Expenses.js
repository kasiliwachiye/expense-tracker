import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Edit from "@mui/icons-material/Edit";
import Icon from "@mui/material/Icon";
import auth from "../auth/auth-helper";
import { listByUser, update } from "./api-expense.js";
import DeleteExpense from "./DeleteExpense";
import { Redirect } from "react-router-dom";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, DateTimePicker, MuiPickersUtilsProvider } from "@mui/lab";

const RootContainer = styled("div")({
  width: "90%",
  maxWidth: "800px",
  margin: "auto",
  marginTop: 40,
  marginBottom: 40,
});

const Heading = styled(Typography)({
  fontSize: "1.5em",
  fontWeight: 400,
  marginTop: 12,
  marginBottom: 4,
});

const ErrorIcon = styled(Icon)({
  verticalAlign: "middle",
});

const NotesText = styled(Typography)({
  color: "grey",
});

const StyledAccordion = styled(Accordion)({
  border: "1px solid #58bd7f",
  margin: 6,
});

const InfoContainer = styled("div")({
  marginRight: 32,
  width: 90,
});

const AmountText = styled(Typography)({
  fontSize: "2em",
  color: "#2bbd7e",
});

const SearchContainer = styled("div")({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

const StyledTextField = styled(TextField)({
  margin: "8px 16px",
  width: 240,
});

const ButtonsContainer = styled("div")({
  textAlign: "right",
});

const DateText = styled(Typography)({
  fontSize: "1.1em",
  color: "#8b8b8b",
  marginTop: 4,
});

function Expenses() {
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [expenses, setExpenses] = useState([]);
  const jwt = auth.isAuthenticated();
  const date = new Date(),
    y = date.getFullYear(),
    m = date.getMonth();
  const [firstDay, setFirstDay] = useState(new Date(y, m, 1));
  const [lastDay, setLastDay] = useState(new Date(y, m + 1, 0));

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;
    listByUser(
      { firstDay: firstDay, lastDay: lastDay },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data.error) {
        setRedirectToSignin(true);
      } else {
        setExpenses(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const handleSearchFieldChange = (name) => (date) => {
    if (name === "firstDay") {
      setFirstDay(date);
    } else {
      setLastDay(date);
    }
  };

  const searchClicked = () => {
    listByUser({ firstDay: firstDay, lastDay: lastDay }, { t: jwt.token }).then(
      (data) => {
        if (data.error) {
          setRedirectToSignin(true);
        } else {
          setExpenses(data);
        }
      }
    );
  };

  const handleChange = (name, index) => (event) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index][name] = event.target.value;
    setExpenses(updatedExpenses);
  };

  const handleDateChange = (index) => (date) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index].incurred_on = date;
    setExpenses(updatedExpenses);
  };

  const clickUpdate = (index) => {
    let expense = expenses[index];
    update(
      {
        expenseId: expense._id,
      },
      {
        t: jwt.token,
      },
      expense
    ).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setSaved(true);
        setTimeout(() => {
          setSaved(false);
        }, 3000);
      }
    });
  };

  const removeExpense = (expense) => {
    const updatedExpenses = [...expenses];
    const index = updatedExpenses.indexOf(expense);
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  if (redirectToSignin) {
    return <Redirect to="/signin" />;
  }

  return (
    <RootContainer>
      <SearchContainer>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            disableFuture
            format="dd/MM/yyyy"
            label="SHOWING RECORDS FROM"
            views={["year", "month", "date"]}
            value={firstDay}
            onChange={handleSearchFieldChange("firstDay")}
            className={StyledTextField}
          />
          <DatePicker
            format="dd/MM/yyyy"
            label="TO"
            views={["year", "month", "date"]}
            value={lastDay}
            onChange={handleSearchFieldChange("lastDay")}
            className={StyledTextField}
          />
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="secondary" onClick={searchClicked}>
          GO
        </Button>
      </SearchContainer>

      {expenses.map((expense, index) => (
        <span key={index}>
          <StyledAccordion>
            <AccordionSummary expandIcon={<Edit />}>
              <InfoContainer>
                <AmountText>$ {expense.amount}</AmountText>
                <Divider style={{ marginTop: 4, marginBottom: 4 }} />
                <Typography>{expense.category}</Typography>
                <DateText>
                  {new Date(expense.incurred_on).toLocaleDateString()}
                </DateText>
              </InfoContainer>
              <div>
                <Heading>{expense.title}</Heading>
                <NotesText>{expense.notes}</NotesText>
              </div>
            </AccordionSummary>
            <Divider />
            <AccordionDetails style={{ display: "block" }}>
              <div>
                <StyledTextField
                  label="Title"
                  value={expense.title}
                  onChange={handleChange("title", index)}
                  margin="normal"
                />
                <StyledTextField
                  label="Amount ($)"
                  value={expense.amount}
                  onChange={handleChange("amount", index)}
                  margin="normal"
                  type="number"
                />
              </div>
              <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <DateTimePicker
                    label="Incurred on"
                    views={["year", "month", "date"]}
                    value={expense.incurred_on}
                    onChange={handleDateChange(index)}
                    showTodayButton
                    className={StyledTextField}
                  />
                </MuiPickersUtilsProvider>
                <StyledTextField
                  label="Category"
                  value={expense.category}
                  onChange={handleChange("category", index)}
                  margin="normal"
                />
              </div>
              <StyledTextField
                label="Notes"
                multiline
                rows="2"
                value={expense.notes}
                onChange={handleChange("notes", index)}
                margin="normal"
              />
              <ButtonsContainer>
                {error && (
                  <Typography component="p" color="error">
                    <ErrorIcon color="error">error</ErrorIcon>
                    {error}
                  </Typography>
                )}
                {saved && (
                  <Typography
                    component="span"
                    color="secondary"
                    className={classes.status}
                  >
                    Saved
                  </Typography>
                )}
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => clickUpdate(index)}
                >
                  Update
                </Button>
                <DeleteExpense expense={expense} onRemove={removeExpense} />
              </ButtonsContainer>
            </AccordionDetails>
          </StyledAccordion>
        </span>
      ))}
    </RootContainer>
  );
}

export default Expenses;
