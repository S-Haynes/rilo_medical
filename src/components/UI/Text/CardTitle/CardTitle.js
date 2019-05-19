import React from "react";
import "./CardTitle.css";

const CardTitle = props => {
  return <h2 className="CardTitle">{props.text}</h2>;
};

export default CardTitle;
