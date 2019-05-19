import React, { Component } from "react";

import Video from "../../../../assets/media/heartrate.mp4";
import Overlay from "../../Overlay/Overlay";
import HomeImgBg from "../../../../assets/img/homebg.png";

import "./VideoBg.css";

class VideoBg extends Component {
  state = {
    deviceWidth: null
  };
  componentDidMount() {
    this.setState(prevState => ({
      deviceWidth: window.innerWidth
    }));

    console.log(window.innerWidth);
  }

  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "80vh"
        }}
      >
        <Overlay bgColor="#000" bgOpacity="0.9" />
        {window.innerWidth > 767 ? (
          <video className="VideoBg" autoPlay loop muted>
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              zIndex: "1"
            }}
            src={HomeImgBg}
          />
        )}

        <div
          style={{
            position: "relative",
            zIndex: "3"
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default VideoBg;
