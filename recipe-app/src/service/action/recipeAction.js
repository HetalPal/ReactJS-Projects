import { db } from "../../config/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const ref = collection(db, "recipes");

export const fetchRecipes = () => async (dispatch) => {
  dispatch({ type: "LOADING" });
  const data = await getDocs(ref);
  const recipes = data.docs.map((d) => ({
    id: d.id,
    ...d.data(),
  }));
  dispatch({ type: "SET_RECIPES", payload: recipes });
};

export const addRecipe = (r) => async (dispatch) => {
  await addDoc(ref, r);
  dispatch(fetchRecipes());
};

export const deleteRecipe = (id) => async (dispatch) => {
  await deleteDoc(doc(db, "recipes", id));
  dispatch(fetchRecipes());
};

export const updateRecipe = (id, data) => async (dispatch) => {
  await updateDoc(doc(db, "recipes", id), data);
  dispatch(fetchRecipes());
};