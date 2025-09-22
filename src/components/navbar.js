import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const isLoggedIn = () => !!localStorage.getItem("token");

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <img style={{ width: "25%" }} src={logo} alt="Logo" />
      </NavLink>
      <div className="navbar" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <NavLink className="nav-link" to="/">
            List
          </NavLink>
          <NavLink className="nav-link" to="/create">
            Create Post
          </NavLink>
          {isLoggedIn() ? (
            <>
              <NavLink className="nav-link" to="/dashboard">
                Dashboard
              </NavLink>
              <NavLink className="nav-link" to="/logout">
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
