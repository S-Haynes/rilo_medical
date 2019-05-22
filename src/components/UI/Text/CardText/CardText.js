import React from "react";
import "./CardText.css";

const CardText = props => {
  return <p className="CardText">{props.children}</p>;
};

export default CardText;
