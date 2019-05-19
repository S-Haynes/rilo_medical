import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  CardImg
} from "reactstrap";
import { Link } from "react-router-dom";

import Logo from "../../assets/img/logo.png";
import "./Navbar.css";

class HeaderNav extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">
          <CardImg
            top
            style={{ width: "100px", marginLeft: "30px" }}
            src={Logo}
            alt="Card image cap"
          />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavLink tag={Link} to="/purchase">
              Purchase
            </NavLink>
            <NavItem>
              <NavLink tag={Link} to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default HeaderNav;
