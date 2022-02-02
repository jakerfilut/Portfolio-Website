import React from "react";
import "./Tech.css";
import { IconContext } from "react-icons/lib";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
import { DiRuby } from "react-icons/di";
import { SiRubyonrails } from "react-icons/si";
import { AiOutlineConsoleSql } from "react-icons/ai";

function Tech() {
  // console.log("test");
  const frontend = [
    { language: "HTML", icon: ImHtmlFive },
    { language: "JavaScript", icon: IoLogoJavascript },
    { language: "React", icon: FaReact },
    { language: "CSS", icon: SiCss3 },
  ];

  const backend = [
    { language: "Ruby", icon: DiRuby },
    { language: "Rails", icon: SiRubyonrails },
    { language: "SQL", icon: AiOutlineConsoleSql },
  ];

  const frontToDisplay = frontend.map((lan, idx) => {
    const Icon = frontend[idx].icon;
    const lang = lan.language;
    return (
      <span className="tech__container-card">
        <div className="tech__container-cardInfo">
          <Icon />
          <h4>{lang}</h4>
        </div>
      </span>
    );
  });

  const backToDisplay = backend.map((lan, idx) => {
    const Icon = backend[idx].icon;
    const lang = lan.language;
    return (
      <span className="tech__container-card">
        <div className="tech__container-cardInfo">
          <Icon />
          <h4>{lang}</h4>
        </div>
      </span>
    );
  });

  return (
    <IconContext.Provider value={{ size: 30 }}>
      <div id="tech" className="tech__section">
        <h1 className="tech__heading">Front-End</h1>
        <div className="tech__container">{frontToDisplay}</div>
        <div></div>
        <h1 className="tech__heading">Back-End</h1>
        <div className="tech__container">{backToDisplay}</div>
      </div>
    </IconContext.Provider>
  );
}
export default Tech;
