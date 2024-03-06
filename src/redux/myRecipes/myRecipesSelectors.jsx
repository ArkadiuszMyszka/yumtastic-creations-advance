export const selectIsLoading = (state) => state.my_recipes.isLoading;

export const selectError = (state) => state.my_recipes.error;

export const selectRecipes = (state) => state.my_recipes.items;

export const selectTotal = (state) => state.my_recipes.total;
