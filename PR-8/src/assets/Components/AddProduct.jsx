import generateUniqueId from "generate-unique-id";
import { getStorageData, setStorageData } from '../services/storageData';
import { useNavigate } from "react-router";
import { useState } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap"

const AddProduct = () => {
    const navigate = useNavigate();
    const initialState = {
        id: "",
        title: "",
        description: "",
        price: "",
        category: "",
        qauntity: "",
        image: "",
    }
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.title.trim() === "") {
        alert("Title is required");
        return;
    }

    if (formData.description.trim() === "") {
        alert("Description is required");
        return;
    }

    if (formData.price.trim() === "") {
        alert("Price is required");
        return;
    }

    if (isNaN(formData.price) || Number(formData.price) <= 0) {
        alert("Enter valid price");
        return;
    }

    if (formData.qauntity === "") {
        alert("Quantity is required");
        return;
    }

    if (Number(formData.qauntity) <= 0) {
        alert("Enter valid quantity");
        return;
    }

    if (formData.category === "") {
        alert("Please select category");
        return;
    }

    if (formData.image.trim() === "") {
        alert("Image URL is required");
        return;
    }

    formData.id = generateUniqueId({ length: 6, useLetters: false });
    let data = getStorageData();
    data.push(formData);
    setStorageData(data);
    navigate('/');
}

    return (
        <>
            <Container className="mt-5 d-flex justify-content-center">
                <div style={{ width: "600px" }}>
                    <h2 className="text-center mb-4">Add New Product</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                placeholder="Add Product Title"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Add Product Description"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                placeholder="Add Product Price"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Quantity</Form.Label>
                            <Form.Control
                                type="number"
                                name="qauntity"
                                value={formData.qauntity}
                                onChange={handleChange}
                                placeholder="Add Product Quantity"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Category</Form.Label>
                            <Form.Select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                            >
                                <option value="">--Select Category--</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Grosseries">Grosseries</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Electronics">Electronics</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control
                                type="text"
                                name="image"
                                value={formData.image}
                                onChange={handleChange}
                                placeholder="Paste Image URL"
                            />
                        </Form.Group>

                        <div className="text-center">
                            <Button type="submit">Submit</Button>
                        </div>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default AddProduct;