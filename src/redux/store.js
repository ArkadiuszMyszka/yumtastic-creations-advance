import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { recipesReducer } from './mainPageRecipes/recipesSlice';

const rootReducer = combineReducers({
  recipes: recipesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export default store;
