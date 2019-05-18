import React from "react";
import "./Overlay.css";

const Overlay = props => {
  return (
    <div
      style={{ background: props.bgColor, opacity: props.bgOpacity }}
      className="Overlay"
    />
  );
};

export default Overlay;
