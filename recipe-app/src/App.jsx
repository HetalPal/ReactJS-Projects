import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import RecipeForm from "./components/RecipeForm";
import EditRecipe from "./components/EditRecipe";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/add" element={
          <PrivateRoute><RecipeForm /></PrivateRoute>
        } />

        <Route path="/edit" element={
          <PrivateRoute><EditRecipe /></PrivateRoute>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;