import React, { useState } from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useTodoListStyle } from "./styled";

const TodoList = () => {
  const classes = useTodoListStyle();
  const [todo, setTodo] = useState<string>("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todo submit");
  };

  return (
    <Box className={classes.container}>
      <Typography variant="h3" color="primary">
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
              value={todo}
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
        <Grid item xs={4}>
          <Typography>Item One</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Item Two</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Item Three</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>Item Four</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TodoList;
