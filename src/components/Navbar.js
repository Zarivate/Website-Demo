import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const closeMobileMenu = () => setOpen(false);
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            TEST
          </Link>
          <div className="menu-icon">
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
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
        </div>
      </nav>
    </>
  );
}

export default Navbar;
