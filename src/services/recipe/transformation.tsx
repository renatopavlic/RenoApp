import { Ingredient, Instruction, RandomRecipe } from "./types";

export const transformToRandomRecipe = (res: any): RandomRecipe => {
  const { recipes } = res;
  const [recipe] = recipes;
  const [analyzedInstruction] = recipe.analyzedInstructions;

  return {
    title: recipe.title,
    readyInMinutes: recipe.readyInMinutes,
    image: recipe.image,
    instructions: recipe.instructions,
    cuisines: recipe.cuisines,
    extendedIngredients: transformToIngredients(recipe.extendedIngredients),
    analyzedInstructions:
      transformtoInstructions(analyzedInstruction.steps) || [],
  };
};

export const transformToIngredients = (res: any): Ingredient[] => {
  return res.map((ingredient: any) => {
    return {
      name: ingredient.originalName,
      amount: ingredient.measures.metric.amount,
      measure: ingredient.measures.metric.unitShort,
    };
  });
};

export const transformtoInstructions = (res: any): Instruction[] => {
  return res.map((instruction: any) => {
    return {
      number: instruction.number,
      description: instruction.step,
    };
  });
};
