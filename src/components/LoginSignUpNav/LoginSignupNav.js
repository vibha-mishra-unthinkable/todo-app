import React from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/App.css";
const LoginSignupNav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src="https://img.icons8.com/ios/50/000000/grocery-store.png"
              alt=""
            />
            grocery
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link loginSignupLink" to="/">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link loginSignupLink" to="/signup">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoginSignupNav;
