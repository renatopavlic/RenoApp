import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useLogoStyle } from "./styled";

const Logo = () => {
  const classes = useLogoStyle();

  const matches = useMediaQuery("(min-width:450px)");

  return (
    <Box display="flex" maxHeight={0} alignItems="center">
      <img src="/logo.png" alt="logo" style={{ height: 50, marginRight: 15 }} />
      {matches && (
        <>
          <Typography className={classes.first}>Everything</Typography>
          <Typography className={classes.second}>Tube</Typography>
        </>
      )}
    </Box>
  );
};

export default Logo;
