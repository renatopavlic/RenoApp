import { Box, Typography } from "@mui/material";
import React from "react";

const TodoItem: React.FC = () => {
  return (
    <Box>
      <Typography>Todo Item</Typography>
      <Typography>some description or icon</Typography>
    </Box>
  );
};

export default TodoItem;
