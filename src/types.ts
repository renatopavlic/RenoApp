export interface RandomReceipt {
  title: string;
  readyInMinutes: number | null;
  image: string;
  instructions: string;
  summary: string;
  cuisines: string[];
  extendedIngredients: Ingredient[];
  analyzedInstructions: Instruction[];
}

export interface Ingredient {
  amount: number;
  image: string | null;
  measure: string;
  name: string;
}

export interface Instruction {
  number: number;
  description: string;
}
