import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const nav = useNavigate();

    const login = async () => {
        try {
            if (!email || !password) {
                return alert("Please fill all fields");
            }

            await signInWithEmailAndPassword(
                auth,
                email.trim(),
                password.trim()
            );

            alert("Login Success");
            nav("/");
        } catch (err) {
            console.log(err);
            alert(err.code);
        }
    };

    return (
        <div className="container mt-5" style={{ maxWidth: "400px" }}>
            <div className="card p-3 shadow">

                <h3 className="text-center mb-3"> Login</h3>

                <input
                    className="form-control mb-2"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    className="form-control mb-2"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button className="btn btn-primary w-100" onClick={login}>
                    Login
                </button>

            </div>
        </div>
    );
}