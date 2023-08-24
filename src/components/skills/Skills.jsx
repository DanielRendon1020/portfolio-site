import React from "react";
import "../../css/style.css";
import LanguagesContext from "../../contexts/LanguagesContext";

const Skills = () => {
  const languageLevels = React.useContext(LanguagesContext);

  // Convert the languageLevels object into an array for sorting
  const sortedLanguages = Object.entries(languageLevels).sort(
    ([, a], [, b]) => b.level - a.level
  );

  return (
    <div id="skills">
      <h2>Skills</h2>
        <div id="skills-container">
          {sortedLanguages.map(([language, { icon, level }]) => (
            <div className="language-item" key={language}>
              <div className="bar-graph">
                {level === "x" && (
                  <div className="coming-soon">Coming&nbsp;Soon</div>
                )}
                <div className="bar" style={{ height: `${level * 20}%` }} />
              </div>
              <div className="language-icon">{icon}</div>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Skills;
