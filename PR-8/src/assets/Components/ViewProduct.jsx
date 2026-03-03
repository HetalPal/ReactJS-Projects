import { useParams, useNavigate } from "react-router-dom";
import { getStorageData, setStorageData } from "../services/storageData";
import { Container, Card, Button } from "react-bootstrap";

const ViewProduct = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  let data = getStorageData();
  let product = data.find((item) => item.id === id);

  const handleDelete = () => {
    let newData = data.filter((item) => item.id !== id);
    setStorageData(newData);
    navigate("/");
  };

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Card style={{ width: "500px" }}>
        <Card.Img variant="top" src={product?.image} />
        <Card.Body>
          <Card.Title>{product?.title}</Card.Title>
          <Card.Text>{product?.description}</Card.Text>
          <Card.Text><strong>Price:</strong> ₹{product?.price}</Card.Text>
          <Card.Text><strong>Category:</strong> {product?.category}</Card.Text>
          <Card.Text><strong>Quantity:</strong> {product?.qauntity}</Card.Text>

          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => navigate("/")}>
              Back
            </Button>

            <Button variant="warning" onClick={() => navigate(`/edit/${id}`)}>
              Edit
            </Button>

            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </div>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default ViewProduct;