import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Home";
import AddProduct from "./assets/Components/AddProduct";
import Header from "./assets/Components/Header";
import EditProduct from "./assets/Components/EditProduct";
import ViewProduct from "./assets/Components/ViewProduct";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view/:id" element={<ViewProduct />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;