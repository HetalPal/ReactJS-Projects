import axios from "axios";

export const uploadImage = async (file) => {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", "recipeApp");

  const res = await axios.post(
    `https://api.cloudinary.com/v1_1/dg5p06d68/image/upload`,
    fd
  );

  return res.data.secure_url;
};