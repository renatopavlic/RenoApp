import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container, Paper } from "@mui/material";

import { fetchRandomRecipe } from "./services/recipe/api";
import { darkTheme, theme } from "./style/theme";
import { RandomRecipe } from "./components/Recipe/types";
import { initialRecipe } from "./components/Recipe/consts";
import Navbar from "./components/Navbar/Navbar";
import Recipe from "./components/Recipe/Recipe";
import Weather from "./components/Weather/Weather";
import "./App.css";

function App() {
  // Todo

  // Navigation
  // Redux
  // Docker
  // Weather Api

  const [recipe, setRecipe] = useState<RandomRecipe>(initialRecipe);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchRandomRecipe();
        setRecipe(result);
      } catch (error) {
        console.log("error123: ", error);
      }
    })();
  }, []);

  console.log("app");

  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Paper>
          <Container>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Recipe recipe={recipe} />
          </Container>
          <Weather />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
