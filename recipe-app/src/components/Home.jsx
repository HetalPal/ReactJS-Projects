import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes, deleteRecipe } from "../service/action/recipeAction";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function Home() {
  const d = useDispatch();
  const nav = useNavigate();

  const recipes = useSelector((state) => state.recipes || []);

  useEffect(() => {
    d(fetchRecipes());
  }, []);

  return (
    <div>

      <div
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1498837167922-ddd27525d352')",
          height: "320px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center text-white"
          style={{
            height: "100%",
            background: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="text-center">
            <h1 className="fw-bold">The Best Tasting Experience!</h1>
            <p>Delicious Recipes Made For You</p>
          </div>
        </div>
      </div>

      <div
        style={{
          background: "#f8f9fa", 
          padding: "50px 0",
        }}
      >
        <div className="container">
          <h3 className="text-center mb-4"> Our Recipes</h3>

          <div className="row">
            {recipes.map((r) => (
              <div key={r.id} className="col-md-4 mb-4">
                <div className="card shadow h-100">

                  {r.image && (
                    <img
                      src={r.image}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  )}

               
                  <div className="card-body">
                    <h5 className="fw-bold">{r.title}</h5>
                    <p className="mb-1"> ₹ {r.price}</p>
                    <span className="badge bg-success">{r.category}</span>
                    <p className="text-muted small mt-2">
                      {r.description}
                    </p>
                  </div>

                  
                  <div className="card-footer d-flex justify-content-between">

                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => d(deleteRecipe(r.id))}
                    >
                      <FaTrash />
                    </button>

                    <button
                      className="btn btn-outline-warning btn-sm"
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
      </div>

    </div>
  );
}