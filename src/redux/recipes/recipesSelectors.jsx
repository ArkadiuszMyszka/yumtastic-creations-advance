// selectors;

export const selectRecipes = (state) => state.recipes.items;

export const selectAllRecipes = (state) => state.recipes.recipes;

export const selectIsLoading = (state) => state.recipes.isLoading;

export const selectError = (state) => state.recipes.error;

export const selectRecipesPopular = (state) => state.recipes.popular;

export const selectCategories = (state) => state.recipes.categories;

export const selectPagination = (state) => state.recipes.paginationData;

export const selectStaticRecipes = (state) => state.recipes.staticRecipes;

export const selectFavoriteRecipes = (state) => state.recipes.favorites.recipes;

export const selectTotalFavoriteRecipes = (state) =>
  state.recipes.favorites.total;

export const selectOwnRecipes = (state) => state.recipes.ownRecipes.recipes;

export const selectOwnTotalRecipes = (state) => state.recipes.ownRecipes.total;
