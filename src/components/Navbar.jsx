import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        border: "1px solid white",
        marginBottom: "20px",
        padding: "10px",
      }}
    >
      <Link to="/event">event</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/list">list</Link> &nbsp;&nbsp;&nbsp;
      <Link to="/form">form</Link>
    </div>
  );
};

export default Navbar;
