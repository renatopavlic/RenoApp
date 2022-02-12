import { Box, Card, Typography } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { TodoItemProps } from "./types";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../services/todos/redux/actions";
import { useTodoListItemStyle } from "./styled";

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const classes = useTodoListItemStyle();

  const { todo } = props;
  const { id, description } = todo;

  const dispatch = useDispatch();

  const handleDeleteClicked = () => {
    if (id) dispatch(deleteTodo(id));
    return;
  };
  return (
    <Card className={classes.card}>
      <Box onClick={handleDeleteClicked} className={classes.header}>
        <DeleteIcon color="primary" className={classes.icon} />
      </Box>
      <Box>
        <Typography
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
          className={classes.description}
        >
          {description}
        </Typography>
      </Box>
    </Card>
  );
};

export default TodoItem;
