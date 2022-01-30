import React from "react";
import { Button } from "../NavBar/Button";
import "./Project.css";
import { IconContext } from "react-icons/lib";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#fff", size: 64 }}>
      <div id="projects" className="project__section">
        <div className="project__wrapper">
          <h1 className="project__heading">My Project's</h1>
          <div className="project__container">
            <span className="project__container-card">
              <div className="project__container-cardInfo">
                <div className="icon">
                  <img
                    src="/images/P1_1.png"
                    alt="Logo"
                    className="project__img"
                  />
                </div>
                <h4>Rick and Morty</h4>
                <h3>Matching Game</h3>
                <p>JavaScript HTML</p>
                <ul className="project__container-features">
                  <li>
                    The Rick and Morty matching game has three differnt level of
                    difficulty. The harder the level the more cards you get.
                    Your goal is to flip over two of the same cards to have a
                    match. Every turn you have your score will increase by one.
                    Once you have matched them all you can enter your name on
                    the highscore screen.
                  </li>
                </ul>
                <Button
                  href="https://www.google.com"
                  target="_blank"
                  buttonSize="btn--wide"
                  buttonColor="primary"
                >
                  Code
                </Button>
              </div>
            </span>

            <span className="project__container-card">
              <div className="project__container-cardInfo">
                <div className="icon">
                  <img
                    src="/images/P2_1.png"
                    alt="Logo"
                    className="project__img"
                  />
                </div>
                <h4>Weather Or Not</h4>
                <h3></h3>
                <p>React</p>
                <ul className="project__container-features">
                  <li>
                    Weather Or Not is a weather finding app. It can find the
                    weather from your current locatoin or you can either search
                    or click on the map. If you have any favorite places you can
                    add them into your favorite's tab to view them later.
                  </li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="blue">
                  Code
                </Button>
              </div>
            </span>

            <span className="project__container-card">
              <div className="project__container-cardInfo">
                <div className="icon">
                  <img
                    src="/images/P1_1.png"
                    alt="Logo"
                    className="project__img"
                  />
                </div>
                <h4>Rick and Morty</h4>
                <h3>Matching Game</h3>
                <p>JavaScript HTML</p>
                <ul className="project__container-features">
                  <li>
                    The Rick and Morty matching game has three differnt level of
                    difficulty. The harder the level the more cards you get.
                    Your goal is to flip over two of the same cards to have a
                    match. Every turn you have your score will increase by one.
                    Once you have matched them all you can enter your name on
                    the highscore screen.
                  </li>
                </ul>
                <Button buttonSize="btn--wide" buttonColor="primary">
                  Code
                </Button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
