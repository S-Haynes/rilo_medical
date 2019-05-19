import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            marginBottom: "250px"
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Layout;
