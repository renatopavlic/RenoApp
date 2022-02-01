export const transformToRandomReceipt = (res: any) => {
  const { recipes } = res;
  const [receipt] = recipes;
  return {
    title: receipt.title,
    readyInMinutes: receipt.readyInMinutes,
    image: receipt.image,
    instructions: receipt.instructions,
    summary: receipt.summary,
    cuisines: receipt.cuisines,
    extendedIngredients: receipt.extendedIngredients, //TODO transform this
    analyzedInstructions: receipt.analyzedInstructions, //TODO transform this
  };
};
