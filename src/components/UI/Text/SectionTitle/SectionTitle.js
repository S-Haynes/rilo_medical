import React from "react";
import "./SectionTitle.css";

const SectionTitle = props => {
  return (
    <h1
      style={{
        color: "#000",
        fontWeight: "800"
      }}
      className="text-center section-title"
    >
      {props.text}
      <br />
      {props.text2}
    </h1>
  );
};

export default SectionTitle;
