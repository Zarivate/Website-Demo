import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";
import { Button } from "./Button";
import { WiAlien } from "react-icons/wi";
import { IconContext } from "react-icons";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [button, setButton] = useState(true);

  const closeMobileMenu = () => setOpen(false);

  // Function that removes and or displays a button depending on the screen size
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // In order to prevent sign-up button from showing up every time user refreshes page
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <IconContext.Provider
              value={{
                size: 45,
                color: "yellow",
                className: "global-class-name",
              }}
            >
              TEST <WiAlien />
            </IconContext.Provider>
          </Link>
          <div className="menu-icon">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={35}
              distance="lg"
              easing="ease-in"
            />
          </div>
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
