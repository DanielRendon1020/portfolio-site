import React from "react";
import bg from "../../assets/bg-fade.jpg";
import self from "../../assets/self.png";
import "./header.css";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiMongodb,
} from "react-icons/di";

const Header = () => {
  return (
    <div className="header">
      <img className="background" src={bg} alt="background" />
      <div className="head-title">
        <div className="left-col">
          <div className="title">
            <h1 className="name">Daniel Rendon</h1>
            <hr className="line" />
            <h3 className="tagline">
              Full Stack Developer <small>(...in progress)</small>
            </h3>
          </div>
          <p className="description">
            On a mission to endure countless hours solving <code>code</code>{" "}
            errors in a state full of mind-numbness, frustration, cat hair and
            dangerous levels of caffeine.
          </p>
        </div>
        <div className="right-col">
          <div className="right-col-center">
            <div className="self-circle">
              <img className="self" src={self} alt="me" />
            </div>
            <div className="langs">
              <DiHtml5 className="html" />
              <DiCss3 className="css" />
              <DiJavascript1 className="js" />
              <DiReact className="react" />
              <DiMongodb className="mongo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
