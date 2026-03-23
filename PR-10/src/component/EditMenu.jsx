import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMenuAsync, updateMenuAsync } from "../services/actions/menuAction";
import { useNavigate, useParams } from "react-router-dom";

const EditMenu = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menu } = useSelector(state => state);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    dispatch(getMenuAsync(id));
  }, []);

  useEffect(() => {
    if(menu){
      setName(menu.name);
      setPrice(menu.price);
      setDescription(menu.description);
      setImage(menu.image);
    }
  }, [menu]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let obj = {
      id: Number(id),
      name,
      price,
      description,
      image,
      category: menu.category
    }

    dispatch(updateMenuAsync(obj));
    navigate(`/${menu.category}-list`);
  }

  return (
    <div>
      <h2>Edit Menu</h2>

      <form onSubmit={handleSubmit}>

        <input value={name} onChange={(e)=>setName(e.target.value)} />
        <br /><br />

        <input value={price} onChange={(e)=>setPrice(e.target.value)} />
        <br /><br />

        <input value={description} onChange={(e)=>setDescription(e.target.value)} />
        <br /><br />

        <input value={image} onChange={(e)=>setImage(e.target.value)} />
        <br /><br />

        <button type="submit">Update</button>

      </form>
    </div>
  )
}

export default EditMenu;