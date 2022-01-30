import { React, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <a className="navbar-logo" href="#home" onClick={closeMobileMenu}>
              Jake Filut
            </a>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <a className="nav-links" href="#home" onClick={closeMobileMenu}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#tech" className="nav-links" onClick={closeMobileMenu}>
                  Technologies
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#projects"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Projects
                </a>
              </li>
              <li className="nav-btn">
                {button ? (
                  <a href="#contact" className="btn-link">
                    <Button buttonStyle="btn--outline">Contact Me</Button>
                  </a>
                ) : (
                  <a
                    href="#contact"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Contact Me
                    </Button>
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
