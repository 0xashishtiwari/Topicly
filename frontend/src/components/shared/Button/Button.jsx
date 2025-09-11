import React from "react";
import "./Button.css";

const Button = ({text , onClick}) => {
  return (
    <button onClick={onClick} className="btn">
      <span>{text}</span>
      <i
        className="fas fa-arrow-right"
        style={{ color: "#f4f4f4ff", fontSize: "18px"  , marginLeft : '10px'}}
      ></i>
    </button>
  );
};

export default Button;
