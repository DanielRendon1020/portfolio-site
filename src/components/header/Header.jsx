import React from "react";
import bg from "../../assets/bg-fade.jpg";
import self from "../../assets/self.png";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="background" src={bg} alt="background" />
      <div className="head-title">
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
        <div className="self-circle">
          <img className="self" src={self} alt="me" />
        </div>
      </div>
    </div>
  );
};

export default Header;
