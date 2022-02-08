import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Switch,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import Logo from "./Logo";
import { NavbarProps } from "./types";

const Navbar: React.FC<NavbarProps> = (props) => {
  const { darkMode, setDarkMode } = props;

  const handleModeSwitch = () => {
    setDarkMode((state) => !state);
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Box display="flex" alignItems="center" mr="auto">
          <Logo />
        </Box>
        <Box>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleModeSwitch}
                  aria-label="login switch"
                />
              }
              label={
                darkMode ? <LightbulbIcon color="primary" /> : <DarkModeIcon />
              }
            />
          </FormGroup>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
