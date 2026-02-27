import { useParams, useNavigate } from "react-router-dom";
import { getStorageData, setStorageData } from "../services/storageData";
import { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";

const EditProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  useEffect(() => {
    let data = getStorageData();
    let product = data.find((item) => item.id === id);
    setFormData(product);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    let data = getStorageData();
    let updatedData = data.map((item) =>
      item.id === id ? formData : item
    );
    setStorageData(updatedData);
    navigate("/");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <div style={{ width: "600px" }}>
        <h2 className="text-center mb-4">Edit Product</h2>

        <Form onSubmit={handleUpdate}>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={formData?.title || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              name="description"
              value={formData?.description || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={formData?.price || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Quantity</Form.Label>
            <Form.Control
              type="number"
              name="qauntity"
              value={formData?.qauntity || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Control
              type="text"
              name="category"
              value={formData?.category || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData?.image || ""}
              onChange={handleChange}
            />
          </Form.Group>

          <div className="text-center">
            <Button type="submit">Update</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default EditProduct;