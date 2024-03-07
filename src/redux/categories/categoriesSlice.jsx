import { createSlice } from '@reduxjs/toolkit';
import {
  getCategoriesList,
  getRecipesByCategory,
} from './categoriesOperations.jsx';

const initialState = {
  items: [],
  paginationData: null,
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getCategoriesList.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getRecipesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipesByCategory.fulfilled, (state, action) => {
        state.items = action.payload.recipeData;
        state.paginationData = action.payload.metaData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;

/////////////////////////////////////////////////////////

//Categories pomieszane z search z pliku slice z poprzedniego repo

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   getCategories,
//   getCategoryRecipes,
//   getSearchResultByIngredient,
//   getSearchResultByTitle,
// } from './operations.js';

// const handlePending = state => {
//   state.recipeCategories = [];
//   state.searchByTitle = [];
//   state.searchByIngredient = [];
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// const categoriesSlice = createSlice({
//   name: 'categories',
//   initialState: {
//     items: [],
//     recipeCategories: [],
//     categoryRecipesTotalCount: 0,
//     categoryRecipesCurrentPage: 1,
//     searchByTitle: [],
//     searchByTitleTotalRes: 0,
//     currentPageTitle: 1,
//     searchByIngredient: [],
//     searchByIngredientTotalRes: 0,
//     currentPageIngredient: 1,
//     isLoading: false,
//     recipeCategoriesIsLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(getCategories.pending, handlePending)
//       .addCase(getCategories.rejected, handleRejected)
//       .addCase(getCategories.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.items = action.payload;
//       })
//       .addCase(getCategoryRecipes.pending, (state, action) => {
//         state.recipeCategoriesIsLoading = true;
//       })
//       .addCase(getCategoryRecipes.rejected, (state, action) => {
//         state.recipeCategoriesIsLoading = false;
//       })
//       .addCase(getCategoryRecipes.fulfilled, (state, action) => {
//         state.recipeCategoriesIsLoading = false;
//         state.error = null;
//         state.recipeCategories = action.payload.recipes;
//         state.categoryRecipesTotalCount = action.payload.totalCount;
//         state.categoryRecipesCurrentPage = action.payload.currentPage;
//       })
//       .addCase(getSearchResultByTitle.pending, handlePending)
//       .addCase(getSearchResultByTitle.rejected, handleRejected)
//       .addCase(getSearchResultByTitle.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.searchByTitle = action.payload.results;
//         state.searchByTitleTotalRes = action.payload.totalResults;
//         state.currentPageTitle = action.payload.currentPage;
//       })
//       .addCase(getSearchResultByIngredient.pending, handlePending)
//       .addCase(getSearchResultByIngredient.rejected, handleRejected)
//       .addCase(getSearchResultByIngredient.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.searchByIngredient = action.payload.recipes;
//         state.searchByIngredientTotalRes = action.payload.totalPages;
//         state.currentPageIngredient = action.payload.currentPage;
//       })
//       .addDefaultCase((state, action) => {
//         if (action.type === 'auth/logout/fulfilled') {
//           state.items = [];
//           state.recipeCategories = [];
//           state.searchByTitle = [];
//           state.searchByTitleTotalRes = 0;
//           state.currentPageTitle = 1;
//           state.searchByIngredient = [];
//           state.searchByIngredientTotalRes = 0;
//           state.currentPageIngredient = 1;
//         }
//       }),
// });

// export const categoriesReducer = categoriesSlice.reducer;
