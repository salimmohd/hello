import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="AboutUs">
          <li>About Us</li>
        </Link>
        <Link to="DashBoard">
          <li>Dashbord</li>
        </Link>
        <Link to="SearchTask">
          <li>Search</li>
        </Link>

        <Link to="ContactUs">
          <li>Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
