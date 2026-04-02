import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMenuAsync } from "../services/actions/menuAction";
import { useNavigate } from "react-router-dom";

const AddMenuPage = ({ category }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    status: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;


    setFormData({
      ...formData,
      [name]: name === "status" ? value === "true" : value,
    });

  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "MenuImage");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dg5p06d68/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await res.json();
    return result.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = "";

    if (image) {
      imageUrl = await uploadImage();
    }

    const newMenu = {
      ...formData,
      price: Number(formData.price),
      category,
      image: imageUrl,
    };

    dispatch(addMenuAsync(newMenu));
    navigate(`/${category}-list`);

    setFormData({
      name: "",
      price: "",
      description: "",
      status: true,
    });

    setImage(null);
    setPreview("");


  };

  return (
    <> <div className="reservation-section">

      <div className="reservation-img">
        <img
          src={
            preview ||
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          }
          alt="food"
        />
      </div>

      <div className="reservation-form">

        <span className="label">Add Item</span>

        <h2>Create <em>Your Dish</em></h2>

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Enter Price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="text"
            name="description"
            placeholder="Enter Description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>

          <button className="btn-dark">Add Menu</button>

        </form>
      </div>
    </div>
    </>

  );
};

export default AddMenuPage;
