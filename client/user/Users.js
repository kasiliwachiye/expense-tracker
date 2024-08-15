import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ArrowForward from "@mui/icons-material/ArrowForward";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import { list } from "./api-user.js";

const RootPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  margin: theme.spacing(5),
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
  color: theme.palette.openTitle,
}));

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error);
      } else {
        setUsers(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <RootPaper elevation={4}>
      <TitleTypography variant="h6">All Users</TitleTypography>
      <List dense>
        {users.map((item, i) => {
          return (
            <Link to={`/user/${item._id}`} key={i}>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar>
                    <Person />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.name} />
                <ListItemSecondaryAction>
                  <IconButton>
                    <ArrowForward />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </RootPaper>
  );
}

export default Users;
