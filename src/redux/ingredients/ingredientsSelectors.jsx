export const selectIsLoading = (state) => state.ingredients.isLoading;
export const selectError = (state) => state.ingredients.error;
export const selectIngredients = (state) => state.ingredients.items;
export const selectRecipesByIngredient = (state) =>
  state.ingredients.selectedRecipes;
