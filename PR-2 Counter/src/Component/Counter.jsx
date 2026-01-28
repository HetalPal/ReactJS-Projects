import { useEffect, useState } from "react";
import Button from "./Button";
import "../Counter.css";

const Counter = () =>{

  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("");

  const handleINC = () =>{
    setCount(prev => prev + 1);
    setLastAction("ADD");
  };

  const handleDEC = () =>{
    if(count > 0){
      setCount(prev => prev - 1);
      setLastAction("REMOVE");
    }
  };

  useEffect(() =>{
    console.log("Cart Items:", count);
  }, [count]);

  let msg = "";
  if(count === 0){
    msg = "Cart is empty";
  }else if(lastAction === "ADD"){
    msg = "Item added to cart";
  }else{
    msg = "Item removed from cart";
  }

  return(
    <div className="ct-card">
      <h2 className="ct-head">Shopping Cart</h2>
      <div className="ct-dis">{count}</div>
      <div className="st-box">
        <p className={count === 0 ? "status-empty" : ""}>{msg}</p>
      </div>
      <div className="act-btn">
        <Button name="ADD" hanleClick={handleINC}/>
        <Button name="REMOVE" hanleClick={handleDEC}/>
      </div>
    </div>
  );
};

export default Counter;
