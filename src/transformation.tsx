import { Ingredient, Instruction, RandomReceipt } from "./types";

export const transformToRandomReceipt = (res: any): RandomReceipt => {
  const { recipes } = res;
  const [receipt] = recipes;
  const [analyzedInstruction] = receipt.analyzedInstructions;

  return {
    title: receipt.title,
    readyInMinutes: receipt.readyInMinutes,
    image: receipt.image,
    instructions: receipt.instructions,
    summary: receipt.summary,
    cuisines: receipt.cuisines,
    extendedIngredients: transformToIngredients(receipt.extendedIngredients),
    analyzedInstructions: transformtoInstructions(analyzedInstruction.steps),
  };
};

export const transformToIngredients = (res: any): Ingredient[] => {
  return res.map((ingredient: any) => {
    return {
      name: ingredient.originalName,
      amount: ingredient.measures.metric.amount,
      measure: ingredient.measures.metric.unitShort,
      image: ingredient.image,
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
