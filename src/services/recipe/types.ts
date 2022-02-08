export interface RandomRecipe {
  title: string;
  readyInMinutes: number | null;
  image: string;
  instructions: string;
  cuisines: string[];
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
}

export interface Ingredient {
  amount: number;
  measure: string;
  name: string;
}

export interface Instruction {
  number: number;
  description: string;
}
