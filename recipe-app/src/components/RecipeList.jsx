import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../service/action/recipeAction";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function RecipeList() {
  const d = useDispatch();
  const nav = useNavigate();

  const recipes = useSelector((state) => state.recipes || []);
  const loading = useSelector((state) => state.loading);

  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    d(fetchRecipes());
  }, []);

  let data = recipes
    .filter((r) =>
      r.title?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((r) => (cat ? r.category === cat : true));

  if (sort === "asc") data.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "desc") data.sort((a, b) => b.title.localeCompare(a.title));

  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3"> Recipe List</h3>

      <div className="row mb-3">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-4">
          <select className="form-control" onChange={(e) => setCat(e.target.value)}>
            <option value="">All</option>
            <option value="veg">Veg</option>
            <option value="nonveg">Non-Veg</option>
          </select>
        </div>

        <div className="col-md-4">
          <select className="form-control" onChange={(e) => setSort(e.target.value)}>
            <option value="">Sort</option>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
      </div>

      {loading && <p className="text-center">Loading...</p>}

      <div className="row">
        {data.map((r) => (
          <div key={r.id} className="col-md-4 mb-3">
            <div className="card shadow-sm h-100">

              {r.image && (
                <img
                  src={r.image}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}

              <div className="card-body">
                <h5>{r.title}</h5>
                <p> ₹ {r.price}</p>
                <p> {r.category}</p>
                <p className="text-muted">{r.description}</p>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => d(deleteRecipe(r.id))}
                >
                  <FaTrash />
                </button>

                <button
                  className="btn btn-warning btn-sm"
                  onClick={() => nav("/edit", { state: r })}
                >
                  <FaEdit />
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}