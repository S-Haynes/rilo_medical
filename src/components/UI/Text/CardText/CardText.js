import React from "react";
import "./CardText.css";

const CardText = props => {
  return (
    <p className="CardText">
      {props.text}
      <br />
      <br />
      {props.text2}
    </p>
  );
};

export default CardText;
