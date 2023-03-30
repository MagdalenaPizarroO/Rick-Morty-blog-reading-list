import React from "react";
import navbar from "../../img/navbar.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar mb-3" >
      <div className="container ">
        <Link to="/">
          <img src={navbar} style={{ width: "60px" }} />
        </Link>
        <h1>Rick and Morty Fans ONLY</h1>
        <div className="ml-auto">
          <Link to="/demo">
            <button className="btn btn-primary">
              Check the Context in action
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
