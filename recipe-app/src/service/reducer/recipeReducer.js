const initialState = {
  recipes: [],
  loading: false,
};

export const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_RECIPES":
      return { ...state, recipes: action.payload, loading: false };
    default:
      return state;
  }
};