import React from "react";
import "./Footer.css";
import Logo from "../../assets/img/logo.png";
import { CardImg } from "reactstrap";

const Footer = props => {
  return (
    <div className="Footer d-flex text-center justify-content-center align-items-center">
      <img style={{ width: "150px" }} src={Logo} alt="logo" />
    </div>
  );
};

export default Footer;
