import React from "react";

import Video from "../../../../assets/media/heartrate.mp4";
import Overlay from "../../Overlay/Overlay";

import "./VideoBg.css";

const VideoBg = props => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh"
      }}
    >
      <Overlay bgColor="#000" bgOpacity="0.9" />
      <video className="VideoBg" autoPlay loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: "relative",
          zIndex: "3"
        }}
      >
        {props.children}
      </div>
    </div>
  );
};

export default VideoBg;
