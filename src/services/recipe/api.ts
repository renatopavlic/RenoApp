import { RandomRecipe } from "./types";
import { transformToRandomRecipe } from "./transformation";

export const fetchRandomRecipe = async (): Promise<RandomRecipe> => {
  const response = await fetch(
    `${process.env.REACT_APP_RECIPE_API_BASE_URL}?apiKey=${process.env.REACT_APP_RECIPE_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  console.log("data: ", data);
  return transformToRandomRecipe(data);
};
