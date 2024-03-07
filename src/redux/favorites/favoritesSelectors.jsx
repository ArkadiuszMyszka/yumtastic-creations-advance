export const selectIsLoading = (state) => state.favorites.isLoading;

export const selectError = (state) => state.favorites.error;

export const selectRecipes = (state) => state.favorites.items;

export const selectTotal = (state) => state.favorites.total;
