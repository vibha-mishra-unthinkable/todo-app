import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdProductionQuantityLimits, MdAddShoppingCart } from "react-icons/md";
import "../../assets/styles/Sidebar.css";
const Sidebar = () => {
  return (
    <div className="conatiner sidebar">
      <ul className="navbar-nav">
        <li className="nav-item sidebarLi">
          <Link className="nav-link sidebarLink" to="/home">
            <FaHome />
            Home
          </Link>
        </li>
        <li className="nav-item sidebarLi">
          <Link className="nav-link sidebarLink" to="/home/products">
            <MdProductionQuantityLimits />
            Products
          </Link>
        </li>
        <li className="nav-item sidebarLi">
          <Link className="nav-link sidebarLink" to="/home/cart">
            <MdAddShoppingCart />
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
