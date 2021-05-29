import React, { Component } from "react";
import "./header.css";
import logo from "../../../public/image/logo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <img
            src={logo}
            alt="logo"
            className="img-header"
            style={{ marginLeft: "-450px" }}
          />
          <div className="header-lbl">
            <h1>BLUE CHIC Computer</h1>
            <p>Modern And Professional</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
