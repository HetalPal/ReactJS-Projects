import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../services/actions/authAction";
import { useNavigate, Link } from "react-router-dom";
import { Container, Form, Button, Card } from "react-bootstrap";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isAuth, error, loading } = useSelector(state => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginAsync(email, password));
    };

    useEffect(() => {
        if (isAuth) {
            navigate("/");
        }
    }, [isAuth]);

    return (<Container className="d-flex justify-content-center align-items-center vh-100">

        ```
        <Card style={{ width: "400px", padding: "20px" }}>
            <h3 className="text-center mb-3">Login</h3>

            {error && <p className="text-danger">{error}</p>}

            <Form onSubmit={handleSubmit}>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button type="submit" className="w-100" disabled={loading}>
                    {loading ? "Please wait..." : "Login"}
                </Button>

            </Form>

            <p className="mt-3 text-center">
                Don't have account? <Link to="/register">Register</Link>
            </p>

        </Card>

    </Container>


    );
}

export default Login;
