export const fetchIngredientFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addIngredientFulfilled = (state, action) => {
  state.items = action.payload;
};

export const deleteIngredientFulfilled = (state, action) => {
  const productIndex = state.items.findIndex(
    item =>
      item.productId === action.payload[0].productId &&
      item.measure === action.payload[0].measure,
  );

  state.items.splice(productIndex, 1);
};

export const anyPending = state => {
  state.isLoading = true;
};

export const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
