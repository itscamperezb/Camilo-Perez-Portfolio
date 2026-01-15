import React, { useStae } from "react";
import "../App.css";
import reactLogo from "../assets/react.svg";
import js from "../assets/javascript.svg";
import css from "../assets/css_old.svg";
import html from "../assets/html5.svg";
import nextjs from "../assets/nextjs_icon_dark.svg";
import node from "../assets/nodejs.svg";
import git from "../assets/git.svg";

function ExperienceIcons() {
  return (
    <div id="profileInfo">
      <h2>Experience with</h2>
      <div className="iconContainer">
        <img src={reactLogo} className="icon"></img>
        <img src={js} className="icon"></img>
        <img src={nextjs} className="icon"></img>
        <img src={node} className="icon"></img>
        <img src={html} className="icon"></img>
        <img src={css} className="icon"></img>
        <img src={git} className="icon"></img>
      </div>
    </div>
  );
}

export default ExperienceIcons;
