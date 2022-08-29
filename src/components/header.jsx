import React, { Component } from "react";
import { NavLink } from "react-router-dom";
class Header extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand">
            Home
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to={"/Movies"} className="nav-link">
                  Movie List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/aboutUs"} className="nav-link">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contactUs"} className="nav-link">
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/newsList"} className="nav-link">
                  News List
                </NavLink>
              </li>
              <li className="nav-item">
                <span className="badge bg-warning">
                  {this.props.nonZeroCount}
                </span>
              </li>
            </ul>
            <span className="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
