import { useEffect, useState } from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import generateUniqueId from "generate-unique-id";

const getSessionData = () => {
  return JSON.parse(sessionStorage.getItem("employees")) || [];
};

function App() {
  const initialState = {
    id: "",
    name: "",
    email: "",
    age: "",
    salary: "",
    job: "",
    image: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [employees, setEmployees] = useState(getSessionData());
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isEdit) {
      const newEmployee = {
        ...formData,
        id: generateUniqueId({ length: 6, useLetters: false }),
      };
      setEmployees([...employees, newEmployee]);
    } else {
      const updated = employees.map((emp) =>
        emp.id === formData.id ? formData : emp
      );
      setEmployees(updated);
      setIsEdit(false);
    }

    setFormData(initialState);
  };

  const handleDelete = (id) => {
    const updated = employees.filter((emp) => emp.id !== id);
    setEmployees(updated);
  };

  const handleEdit = (id) => {
    const record = employees.find((emp) => emp.id === id);
    if (record) {
      setFormData(record);
      setIsEdit(true);
    }
  };

  useEffect(() => {
    sessionStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <div className="layout">

      {/* LEFT SIDE FORM */}
      <div className="left-panel">
        <h2>Employee Form</h2>

        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Job Role</Form.Label>
            <Form.Select
              name="job"
              value={formData.job}
              onChange={handleChange}
              required
            >
              <option value="">Select Job</option>
              <option value="UI/UX">UI/UX Designer</option>
              <option value="Graphics">Graphics Designer</option>
              <option value="Manager">Manager</option>
              <option value="HR">HR</option>
              <option value="Full Stack">Fullstack Developer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salary</Form.Label>
            <Form.Control
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Profile Image URL</Form.Label>
            <Form.Control
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>

          <Button type="submit" variant="dark">
            {isEdit ? "Update" : "Add"} Employee
          </Button>

        </Form>
      </div>

      {/* RIGHT SIDE CARDS */}
      <div className="right-panel">
        <h2>Employee List</h2>

        <div className="card-grid">
          {employees.map((emp) => (
            <Card className="emp-card" key={emp.id}>
              <Card.Img
                variant="top"
                className="emp-img"
                src={emp.image || "https://via.placeholder.com/300x180"}
              />
              <Card.Body>
                <Card.Title>{emp.name}</Card.Title>
                <Card.Text>{emp.email}</Card.Text>
                <Card.Text>Age: {emp.age}</Card.Text>
                <Card.Text>Salary: {emp.salary}</Card.Text>
                <Card.Text>{emp.job}</Card.Text>

                <div className="btn-group-custom">
                  <Button
                    variant="warning"
                    size="sm"
                    onClick={() => handleEdit(emp.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(emp.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;