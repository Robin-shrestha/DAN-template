import React from "react";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";

const Navbar = () => {
  const loc = useLocation();
  return (
    <div className="root-navbar">
      <div className="navbar-logo">
        <img
          src="data:image/png;base64,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"
          alt="placegolder "
        />
      </div>
      <div className="navbar-navigation">
        <ul>
          <li>
            <Link
              to="/"
              className={clsx({
                ["active"]: loc.pathname === "/" ? true : false,
              })}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={clsx({
                ["active"]: loc.pathname === "/services" ? true : false,
              })}
            >
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={clsx({
                ["active"]: loc.pathname === "/about" ? true : false,
              })}
            >
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={clsx({
                ["active"]: loc.pathname === "/projects" ? true : false,
              })}
            >
              {" "}
              Project
            </Link>
          </li>
          <li>
            <Link to="#"> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
