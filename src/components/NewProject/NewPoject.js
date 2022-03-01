import React from "react";
import Carousel from "react-elastic-carousel";
import "./NewProject.css";
import Item from "./item.js";
import { Button } from "../NavBar/Button";
import { ProjectData } from "./ProjectData.js";
import { IconContext } from "react-icons/lib";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

function NewPoject({}) {
  const mapProjects = ProjectData.map((proj) => {
    console.log(proj.techstack);

    // const techToDisplay = proj.map((idx) => {
    //   const Icon = proj[idx].img;
    //   return (
    //     <span className="tech__container-card">
    //       <div className="tech__container-cardInfo">
    //         <Icon />
    //       </div>
    //     </span>
    //   );
    // });

    return (
      <Item>
        <div className="carousel__item_container">
          <img src={proj.img} alt="Logo" className="carousel__img" />
          <div className="carousel_text">
            <h2 className="carousel__h2">{proj.title}</h2>
            <p>{proj.description}</p>
            {/* <p>{proj.techstack[0].language}</p> */}
            <button className="btn__proj">
              <a href={proj.code} target="_blank" class="button">
                Github
              </a>
            </button>
            <button className="btn__proj">
              <a href={proj.demo} target="_blank" class="button">
                Demo
              </a>
            </button>
          </div>
        </div>
      </Item>
    );
  });

  return (
    <IconContext.Provider value={{ size: 30 }}>
      <div className="carousel__container" id="projects">
        <h1 className="carousel__h1">My Project's</h1>
        <Carousel
        //
        // infiniteLoop={true}
        >
          {mapProjects}
        </Carousel>
      </div>
    </IconContext.Provider>
  );
}

export default NewPoject;
