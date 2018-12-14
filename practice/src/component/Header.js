import React, { Component } from "react";
import logo from "../images/images (8).jpg";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="">
        <div className="container header">
          <a href="" className="header-logo">
            <img className="header-logo-img" src={logo} alt="logo" />
          </a>

          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link" href="">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
