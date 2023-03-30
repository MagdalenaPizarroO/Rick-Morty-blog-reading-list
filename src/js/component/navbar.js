import React from "react";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar mb-3" style={{backgroundColor:"black"}}>
      <div className="container ">
	          <Link to="/">
		<img src={logo} style={{width:"110px"}} />
        </Link>
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
