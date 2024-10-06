import React from "react";
import davvLogo from "/davv-logo.svg";
import "./Header.css";
<link
  href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic"
  rel="stylesheet"
/>;

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <img
            src={davvLogo}
            alt="Devi Ahilya Vishwavidyalaya Logo"
            className="logo"
          />
        </div>
        <div className="text-container">
          <h1>DEVI AHILYA VISHWAVIDYALAYA, INDORE</h1>
          <div className="secondary-container">
            <p className="secondary-text">
              (Formerly University of Indore) NAAC A+ accredited <br />
              State University of Madhya Pradesh, India
            </p>
            <a className="reg-login" href="#">
              Register::Login
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
