import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { recipesReducer } from './recipes/recipesSlice.jsx';
import { authReducer } from './auth/authSlice.jsx';
import { categoriesReducer } from './categories/categoriesSlice.jsx';
import { favoritesReducer } from './favorites/favoritesSlice.jsx';
import { ingredientsReducer } from './ingredients/ingredientsSlice.jsx';
import { myRecipesReducer } from './myRecipes/myRecipesSlice.jsx';
import { shoppingListReducer } from './shoppingList/shoppingListSlice.jsx';
import { persistReducer } from 'redux-persist';
import searchReducer from '../redux/search/searchSlice.jsx';
import storage from 'redux-persist/lib/storage';

import { themeReducer } from './theme/themeSlice.jsx';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  categories: categoriesReducer,
  favorites: favoritesReducer,
  ingredients: ingredientsReducer,
  my_recipes: myRecipesReducer,
  recipes: recipesReducer,
  shoppingList: shoppingListReducer,
  search: searchReducer,
  theme: persistReducer(themePersistConfig, themeReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import { recipesReducer } from './recipes/recipesSlice.jsx';
// import { authReducer } from './auth/authSlice.jsx';
// import { categoriesReducer } from './categories/categoriesSlice.jsx';
// import { favoritesReducer } from './favorites/favoritesSlice.jsx';
// import { ingredientsReducer } from './ingredients/ingredientsSlice.jsx';
// import { myRecipesReducer } from './myRecipes/myRecipesSlice.jsx';
// import { shoppingListReducer } from './shoppingList/shoppingListSlice.jsx';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { themeReducer } from './theme/themeSlice.jsx';
// // combineReducers

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const themePersistConfig = {
//   key: 'theme',
//   storage,
// };
// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     categories: categoriesReducer,
//     favorites: favoritesReducer,
//     ingredients: ingredientsReducer,
//     my_recipes: myRecipesReducer,
//     recipes: recipesReducer,
//     shoppingList: shoppingListReducer,
//     theme: persistReducer(themePersistConfig, themeReducer),
//   },

//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
