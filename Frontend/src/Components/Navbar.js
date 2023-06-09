import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const navigate = useNavigate();

  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); //redirecting to login page
    window.location.reload(); //reloading page for refreshing components
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          NotesApp
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
          </ul>
          {/* using bootstrap buttons for login and signup part, using ternary opreator for checking if token present
                  in localstorage of browser if present then showing logout if not then showing login and signup*/}
          {!localStorage.getItem("token") ? (
            <form className="d-flex" style={{ justifyContent: "center" }}>
              <Link
                to="/login"
                className="btn btn-primary"
                role="button"
                style={{ width: "100px" }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="btn btn-primary mx-3"
                role="button"
                style={{ width: "100px" }}
              >
                Sign Up
              </Link>
            </form>
          ) : (
            <Link
              onClick={HandleLogout}
              className="btn btn-primary mx-3"
              style={{ width: "100px" }}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
