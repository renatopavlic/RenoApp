import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTodoListStyle } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../../services/todos/redux/selectors";
import { addTodo } from "../../services/todos/redux/actions";
import { Todo } from "../../services/todos/redux/types";
import TodoItem from "./TodoItem";
import { initialTodo } from "./consts";
import { theme } from "../../style/theme";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(getTodos);

  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  const responsiveTitle = sm ? "h4" : "h3";

  const classes = useTodoListStyle();
  const [todo, setTodo] = useState<Todo>(initialTodo);

  const resetTodo = () => {
    setTodo(initialTodo);
  };

  const handleTodoChange = (e) => {
    setTodo((oldState) => ({ ...oldState, description: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    todo.id = Math.floor(Math.random() * 10000);
    if (todo.description === "") return;

    dispatch(addTodo(todo));

    resetTodo();
  };

  return (
    <Box className={classes.container}>
      <Typography variant={responsiveTitle} color="primary">
        Redux Playground
      </Typography>
      <Grid container spacing={3} pl={2} pt={2}>
        <Grid item xs={12}>
          <form onSubmit={handleSubmit}>
            <TextField
              id="standard-basic"
              variant="standard"
              label="Todo"
              helperText="Add new task"
              value={todo.description}
              onChange={handleTodoChange}
              fullWidth
              inputProps={{
                style: { fontSize: 35 },
              }}
              InputLabelProps={{ style: { fontSize: 20 } }}
              FormHelperTextProps={{
                style: {
                  fontSize: 20,
                },
              }}
            />
            <Box my={3}>
              <Button type="submit" variant="outlined">
                Add Todo
              </Button>
            </Box>
          </form>
        </Grid>
        {todos.map((todo: Todo, index: number) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            <TodoItem todo={todo} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TodoList;
