import { useEffect, useState } from "react";
import { getStorageData } from "../services/storageData";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");

    useEffect(() => {
        let data = getStorageData();
        setProducts(data);
    }, []);

    let filteredProducts = products.filter((item) => {
        return (
            item.title.toLowerCase().includes(search.toLowerCase()) &&
            (category === "" || item.category === category) &&
            (price === "" || item.price.toString().includes(price))
        );
    });

    return (
        <>
            <Container className="mt-4">
                <h2 className="text-center mb-4">All Products</h2>

                <Row className="mb-3">
                    <Col md={4}>
                        <input
                            type="text"
                            placeholder="Search by Title"
                            className="form-control"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </Col>

                    <Col md={4}>
                        <select
                            className="form-control"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value="">All Category</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Grosseries">Grosseries</option>
                            <option value="Mobile">Mobile</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                    </Col>

                    <Col md={4}>
                        <input
                            type="text"
                            placeholder="Search by Price"
                            className="form-control"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </Col>
                </Row>

                <Row>
                    {
                        filteredProducts && filteredProducts.length > 0 ? (
                            filteredProducts.map((item) => (
                                <Col md={4} className="mb-4" key={item.id}>
                                    <Card style={{ width: "100%" }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.image}
                                            style={{ height: "200px", objectFit: "cover" }}
                                        />
                                        <Card.Body>
                                            <Card.Title>{item.title}</Card.Title>

                                            <Card.Text>
                                                {item.description.length > 20
                                                    ? item.description.substring(0, 20) + "..."
                                                    : item.description}
                                            </Card.Text>

                                            <Card.Text>
                                                <strong>Price:</strong> ₹{item.price}
                                            </Card.Text>

                                            <Card.Text>
                                                <strong>Category:</strong> {item.category}
                                            </Card.Text>

                                            <Card.Text>
                                                <strong>Quantity:</strong> {item.qauntity}
                                            </Card.Text>

                                            <Button
                                                variant="primary"
                                                onClick={() => navigate(`/view/${item.id}`)}
                                            >
                                                View More
                                            </Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <h5 className="text-center">No Products Found</h5>
                        )
                    }
                </Row>
            </Container>
        </>
    );
};

export default Home;