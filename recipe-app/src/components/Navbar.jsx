import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Navbar() {
  const nav = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    nav("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg px-3 position-absolute w-100"
      style={{
        zIndex: 10,
        background: "transparent",
      }}
    >
      <Link className="navbar-brand text-white fw-bold" to="/">
        RecipeApp
      </Link>

      <div className="ms-auto d-flex gap-2">

        {!user ? (
          <>
            <Link className="btn btn-outline-light btn-sm" to="/login">
              Login
            </Link>
            <Link className="btn btn-warning btn-sm" to="/signup">
              Signup
            </Link>
          </>
        ) : (
          <>
            <span className="text-white small mt-1">
              {user.email}
            </span>

            <Link className="btn btn-success btn-sm" to="/add">
              + Add
            </Link>

            <button className="btn btn-danger btn-sm" onClick={logout}>
              Logout
            </button>
          </>
        )}

      </div>
    </nav>
  );
}