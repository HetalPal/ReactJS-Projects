import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container fluid className="px-4">
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          OnlineMart
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/add-product">
            Add Product
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;