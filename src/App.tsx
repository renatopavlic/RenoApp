import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";

import { fetchRandomRecipe } from "./services/recipe/api";
import { darkTheme, theme } from "./style/theme";
import { RandomRecipe } from "./components/Recipe/types";
import { initialRecipe } from "./components/Recipe/consts";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import Recipe from "./components/Recipe/Recipe";

function App() {
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

  return (
    <div className="App" style={{ overflowX: "hidden" }}>
      <ThemeProvider theme={darkMode ? darkTheme : theme}>
        <Paper>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Recipe recipe={recipe} />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
