import "../App.css";

const Button = ({ name, hanleClick }) =>{
  return(
    <button className="btn" onClick={hanleClick}>
      {name}
    </button>
  );
};

export default Button;
