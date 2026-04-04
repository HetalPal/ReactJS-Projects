import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Signup Success");
    nav("/login");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <div className="card p-3 shadow">
        <h3 className="text-center">Signup</h3>

        <input className="form-control mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} />

        <input className="form-control mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />

        <button className="btn btn-success w-100" onClick={signup}>
          Signup
        </button>
      </div>
    </div>
  );
}