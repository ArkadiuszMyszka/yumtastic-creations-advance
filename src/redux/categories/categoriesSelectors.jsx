export const selectRecipes = (state) => state.categories.items;

export const selectIsLoading = (state) => state.categories.isLoading;

export const selectError = (state) => state.categories.error;

export const selectCategories = (state) => state.categories.categories;

export const selectPagination = (state) => state.categories.paginationData;
