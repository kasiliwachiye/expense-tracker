import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import auth from "../auth/auth-helper";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@mui/lab";
import { averageCategories } from "./../expense/api-expense.js";
import { VictoryPie, VictoryTheme, VictoryLabel } from "victory";

const Title = styled(Typography)({
  padding: "16px 20px 2px",
  color: "#2bbd7e",
  display: "inline",
});

const SearchContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const StyledDatePicker = styled(DatePicker)({
  margin: "8px 16px",
  width: 240,
});

function CategoryPie() {
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
    averageCategories(
      { firstDay: firstDay, lastDay: lastDay },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setExpenses(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  const handleDateChange = (name) => (date) => {
    if (name === "firstDay") {
      setFirstDay(date);
    } else {
      setLastDay(date);
    }
  };

  const searchClicked = () => {
    averageCategories(
      { firstDay: firstDay, lastDay: lastDay },
      { t: jwt.token }
    ).then((data) => {
      if (data.error) {
        setRedirectToSignin(true);
      } else {
        setExpenses(data);
      }
    });
  };

  return (
    <div>
      <SearchContainer>
        <Title variant="h6">Expenditures per category</Title>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <StyledDatePicker
            disableFuture
            format="dd/MM/yyyy"
            label="FROM"
            views={["year", "month", "date"]}
            value={firstDay}
            onChange={handleDateChange("firstDay")}
          />
          <StyledDatePicker
            format="dd/MM/yyyy"
            label="TO"
            views={["year", "month", "date"]}
            value={lastDay}
            onChange={handleDateChange("lastDay")}
          />
        </MuiPickersUtilsProvider>
        <Button variant="contained" color="secondary" onClick={searchClicked}>
          GO
        </Button>
      </SearchContainer>
      <div style={{ width: 550, margin: "auto" }}>
        <svg viewBox="0 0 320 320">
          <VictoryPie
            standalone={false}
            data={expenses.monthAVG}
            innerRadius={50}
            theme={VictoryTheme.material}
            labelRadius={({ innerRadius }) => innerRadius + 14}
            labelComponent={
              <VictoryLabel
                angle={0}
                style={[
                  {
                    fontSize: "11px",
                    fill: "#0f0f0f",
                  },
                  {
                    fontSize: "10px",
                    fill: "#013157",
                  },
                ]}
                text={({ datum }) => `${datum.x}\n $${datum.y}`}
              />
            }
          />
          <VictoryLabel
            textAnchor="middle"
            style={{ fontSize: 14, fill: "#8b8b8b" }}
            x={175}
            y={170}
            text={`Spent \nper category`}
          />
        </svg>
      </div>
    </div>
  );
}

export default CategoryPie;
