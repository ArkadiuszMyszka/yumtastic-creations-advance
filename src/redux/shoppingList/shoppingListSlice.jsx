import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  fetchShoppingList,
  addIngredientToShoppingList,
  deleteIngredientFromShoppingList,
} from "./operations";
import * as reducer from "./reducers";

const extraActions = [fetchShoppingList, addIngredientToShoppingList];
const getActions = (type) => extraActions.map((action) => action[type]);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(fetchShoppingList.fulfilled, reducer.fetchIngredientFulfilled)
      .addCase(
        addIngredientToShoppingList.fulfilled,
        reducer.addIngredientFulfilled
      )
      .addCase(
        deleteIngredientFromShoppingList.fulfilled,
        reducer.deleteIngredientFulfilled
      )
      .addMatcher(isAnyOf(...getActions("pending")), reducer.anyPending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), reducer.anyFulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), reducer.anyRejected),
});

export const shoppingListReducer = shoppingListSlice.reducer;
