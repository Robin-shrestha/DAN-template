import React from "react";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="root-footer">
      <div className="flex-container">
        <div className="footer-subcontainers">
          <h1>LOGO</h1>
          <h1>{"&"}</h1>
          <h1>NAME</h1>
        </div>
        <div className="footer-subcontainers">
          <h2>Our Services</h2>
          <ul>
            {[0, 1, 2].map((item, index) => (
              <li key={index}>
                <Link to="#">service {item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-subcontainers">
          <h2>Contacts</h2>
          <ul>
            <li>Address</li>
            <li>Phone no</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
