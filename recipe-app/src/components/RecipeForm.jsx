import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRecipe } from "../service/action/recipeAction";
import { uploadImage } from "../uploads/uploadImage";
import { useNavigate } from "react-router-dom";

export default function RecipeForm() {
  const d = useDispatch();
  const nav = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("veg");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    if (!title || !price || !description) {
      return alert("All fields required");
    }

    let url = "";
    if (img) url = await uploadImage(img);

    d(
      addRecipe({
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
        <h4 className="text-center mb-3"> Add Recipe</h4>

        <form onSubmit={submit}>
          <input
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="form-control mb-2"
            type="number"
            placeholder="Price"
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
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input
            type="file"
            className="form-control mb-3"
            onChange={(e) => setImg(e.target.files[0])}
          />

          <button className="btn btn-success w-100">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
}