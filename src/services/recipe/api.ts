import { RandomRecipe } from "../../components/Recipe/types";
import { transformToRandomRecipe } from "./transformation";

export const fetchRandomRecipe = async (): Promise<RandomRecipe> => {
  const rawResponse = await fetch(
    `${process.env.REACT_APP_API_BASE_URL}?apiKey=${process.env.REACT_APP_API_KEY}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await rawResponse.json();
  return transformToRandomRecipe(data);
};
