import React from "react";

import { Link } from "react-router-dom";
import "../css/Navbar.css";
export const Navbar = () => {
  return (
    <>
      <div className="top-nav">
        <div className="reg-nav">
         
          <div>
            <p>Registered for SARS eFiling? Click here to get started.</p>
          </div>
        </div>
        <div className="link-div">
          <div >
            <Link className="link" to="/">Home</Link>
          </div>
          <div>
            <Link className="link" to="/contact">Contact</Link>
          </div>
          <div>
            <Link className="link" to="/faq">FAQ</Link>
          </div>
          <div>
            <Link className="link" to="/calculator">Calculators</Link>
          </div>
          <div>
            <Link className="link" to="/login">Login</Link>
          </div>
        </div>
      </div>
    </>
  );
};
