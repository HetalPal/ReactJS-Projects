import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateRecipe } from "../service/action/recipeAction";
import { useLocation, useNavigate } from "react-router-dom";
import { uploadImage } from "../uploads/uploadImage";

export default function EditRecipe() {
  const { state } = useLocation();
  const d = useDispatch();
  const nav = useNavigate();

  const [title, setTitle] = useState(state?.title || "");
  const [price, setPrice] = useState(state?.price || "");
  const [category, setCategory] = useState(state?.category || "veg");
  const [description, setDescription] = useState(state?.description || "");
  const [img, setImg] = useState(null);

  const update = async (e) => {
    e.preventDefault();

    if (!title || !price || !description) {
      return alert("All fields required");
    }

    let url = state?.image || "";

    if (img) {
      url = await uploadImage(img);
    }

    d(
      updateRecipe(state.id, {
        title,
        price,
        category,
        description,
        image: url,
      })
    );

    nav("/");
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "500px" }}>
      <div className="card p-3 shadow">
        <h4 className="text-center mb-3"> Edit Recipe</h4>

        <form onSubmit={update}>
          <input
            className="form-control mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="form-control mb-2"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <select
            className="form-control mb-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>

          <textarea
            className="form-control mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {state?.image && (
            <img src={state.image} width="100" className="mb-2" />
          )}

          <input
            type="file"
            className="form-control mb-3"
            onChange={(e) => setImg(e.target.files[0])}
          />

          <button className="btn btn-warning w-100">
            Update Recipe
          </button>
        </form>
      </div>
    </div>
  );
}