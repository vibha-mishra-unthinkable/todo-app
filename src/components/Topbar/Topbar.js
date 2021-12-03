import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "../../assets/styles/App.css";

const Topbar = () => {
  let { email } = JSON.parse(localStorage.getItem("user"));
  email = email.slice(0, email.indexOf("@"));
  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <Link className="navbar-brand" to={email ? "/home" : "/"}>
          <img
            src="https://img.icons8.com/ios/50/000000/grocery-store.png"
            alt=""
          />
          grocery
        </Link>

        <span className="navbar-text">
          {email}
          <FaUserCircle />
          <Link to="/">
            <button className="logoutBtn">Logout</button>
          </Link>
        </span>
      </nav>
    </>
  );
};

export default Topbar;
