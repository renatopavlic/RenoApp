import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState<string>("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("todo submit");
  };

  return (
    <Container>
      <Box>
        <Typography>Redux Playground</Typography>
      </Box>
      <Grid container spacing={3}>
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
    </Container>
  );
};

export default TodoList;
