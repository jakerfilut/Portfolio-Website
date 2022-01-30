import React from "react";
import "./Footer.css";
import { IconContext } from "react-icons/lib";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <IconContext.Provider value={{ size: 30 }}>
      <footer>
        <div class="container">
          <ul class="flex-row">
            <li>
              <a href="#home" class="button">
                Home
              </a>
            </li>
            <li>
              <a href="#tech" class="button">
                Technologies
              </a>
            </li>
            <li>
              <a href="#projects" class="button">
                Projects
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jake-filut-717927181/overlay/1635481073954/single-media-viewer/"
                target="_blank"
                class="button"
              >
                Resume
              </a>
            </li>
          </ul>
          <ul class="flex-row">
            <li>
              <a
                href="https://www.linkedin.com/in/jake-filut-717927181/"
                target="_blank"
                class="button"
              >
                <BsLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jakerfilut"
                target="_blank"
                class="button"
              >
                <BsGithub />
              </a>
            </li>
          </ul>
          <p>&copy; 2021 Jake Filut</p>
        </div>
      </footer>
    </IconContext.Provider>
  );
}

export default Footer;
