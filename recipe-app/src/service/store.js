import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { recipeReducer } from "./reducer/recipeReducer";

export const store = createStore(recipeReducer, applyMiddleware(thunk));