import React from "react";
import { useContext } from "react";
import bg from "../../assets/bg-fade.jpg";
import self from "../../assets/self.png";
import "../../css/style.css";
import LanguagesContext from "../../contexts/LanguagesContext";

const Header = () => {
  const languageIcons = useContext(LanguagesContext);

  return (
    <div id="header">
      <img id="background" src={bg} alt="background" />
      <div id="head-title">
        <div id="left-col">
          <div id="title">
            <h1 id="name">Daniel Rendon</h1>
            <hr id="line" />
            <h3 id="tagline">
              Full Stack Developer <small>(...in&nbsp;progress)</small>
            </h3>
          </div>
          <p id="description">
            On a mission to endure countless hours solving <code>code</code>{" "}
            errors in a state full of mind-numbness, frustration, cat hair and
            dangerous levels of caffeine.
          </p>
        </div>
        <div id="right-col">
          <div id="right-col-center">
            <div id="self-circle">
              <img id="self" src={self} alt="me" />
            </div>
            <div id="langs">
              {/* Using optional chaining (?.) to access the properties of the languageIcons object.
              This helps prevent the error if the languageIcons object or any of its nested properties are undefined. */}
              <i>{languageIcons?.html?.icon}</i>
              <i>{languageIcons?.css?.icon}</i>
              <i>{languageIcons?.javascript?.icon}</i>
              <i>{languageIcons?.react?.icon}</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
