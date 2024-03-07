import { createSlice } from '@reduxjs/toolkit';

import {
  fetchCategoriesList,
  fetchRecipesByCategory,
  getRecipeById,
  addToFavorites,
  removeFromFavorites,
  fetchRecipesMainPage,
  fetchSearchRecipes,
  getRecipesPopular,
  addRecipe,
  fetchAllRecipes,
} from './recipesOperations.jsx';

import { getFavorite, removeFavorite } from './recipesFavoritesOperations.jsx';
import { getOwnRecipes, removeOwnRecipe } from './recipesOwnOperations.jsx';

const initialState = {
  items: [],
  recipes: [],
  paginationData: null,
  categories: [],
  popular: [],
  staticRecipes: {},
  isLoading: false,
  error: null,
  favorites: { recipes: [], total: 0 },
  ownRecipes: { recipes: [], total: 0 },
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesMainPage.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesMainPage.fulfilled, (state, action) => {
        state.staticRecipes = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesMainPage.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getRecipeById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipeById.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipeById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addToFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(addToFavorites.fulfilled, (state, action) => {
        state.items.map(item => item.id === action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addToFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeFromFavorites.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFromFavorites.fulfilled, (state, action) => {
        state.items.map(item => item.id === action.payload.id);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(removeFromFavorites.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getRecipesPopular.pending, state => {
        state.isLoading = true;
      })
      .addCase(getRecipesPopular.fulfilled, (state, action) => {
        state.popular = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getRecipesPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchAllRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload.recipes;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchAllRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchSearchRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSearchRecipes.fulfilled, (state, action) => {
        state.items = action.payload.recipeData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchSearchRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchCategoriesList.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(fetchRecipesByCategory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.items = action.payload.recipeData;
        state.paginationData = action.payload.metaData;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchRecipesByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(addRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.items.push(action.payload.result);
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getOwnRecipes.pending, state => {
        state.isLoading = true;
      })
      .addCase(getOwnRecipes.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload[0].recipeData;
        state.ownRecipes.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(getOwnRecipes.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeOwnRecipe.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeOwnRecipe.fulfilled, (state, { payload }) => {
        state.ownRecipes.recipes = payload[0].recipeData;
        state.ownRecipes.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(removeOwnRecipe.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(getFavorite.fulfilled, (state, { payload }) => {
        state.favorites.recipes = payload[0].recipeData;
        state.favorites.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(getFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(removeFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(removeFavorite.fulfilled, (state, { payload }) => {
        state.favorites.recipes = payload[0].recipeData;
        state.favorites.total = payload[0].metaData.total;
        state.isLoading = false;
      })
      .addCase(removeFavorite.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;

// import { createSlice } from '@reduxjs/toolkit';
// import { getMainPageRecipes } from './operations.jsx';

// const recipesSlice = createSlice({
//   name: 'recipes',
//   initialState: {
//     categoryRecipes: [],
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder =>
//     builder
//       .addCase(getMainPageRecipes.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(getMainPageRecipes.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.error = null;
//         state.categoryRecipes = action.payload;
//       })
//       .addCase(getMainPageRecipes.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       }),
// });

// export const recipesReducer = recipesSlice.reducer;
