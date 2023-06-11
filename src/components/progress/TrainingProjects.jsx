import React from "react";
import { useContext } from "react";
import LanguagesContext from "../../contexts/LanguagesContext";
import "./progress.css";
import { images } from "../../assets/imgExport";
import {SiGithub} from 'react-icons/si'

function TrainingProjects({ project }) {
  const languageIcons = useContext(LanguagesContext);

  const { name, desc, img, link, langs } = project;

  const projectLangs = langs.map((lang, langIndex) => ({
    name: lang,
    icon: languageIcons[lang].icon,
  }));

  return (
    <div id="project">
      <div id="img-container">
        <img id="project-img" loading="lazy" src={images[img]} alt={name} />
        <a id="github-link" href={link} target="_blank" aria-label="Github"><SiGithub/></a>
      </div>

      <div id="project-info-container">
        <h3 id="project-title">{name}</h3>
        {/* Only using this to render out embedded tags in the description */}
        <p id="desc" dangerouslySetInnerHTML={{ __html: desc }}></p>
        <div id="langs-used">
          {projectLangs.map((lang, langIndex) => (
            <i key={langIndex}>{lang.icon}</i>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingProjects;
