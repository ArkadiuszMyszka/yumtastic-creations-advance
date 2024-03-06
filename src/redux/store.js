import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { recipesReducer } from './recipes/recipesSlice.jsx';
import { authReducer } from './auth/authSlice.jsx';

const rootReducer = combineReducers({
  recipes: recipesReducer,
  auth: authReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {},
    }),
});

export default store;
