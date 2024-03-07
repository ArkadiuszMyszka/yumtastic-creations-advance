export const selectRecipeByTitle = state => state.search.recipeByTitle;
export const selectRecipesByIngredient = state =>
  state.search.recipesByIngredient;
export const selectSearchFilter = state => state.search.searchFilter;
export const selectCurrentPage = state => state.search.currentPage;
export const selectIsLoading = state => state.search.isLoading;
export const selectError = state => state.search.error;
