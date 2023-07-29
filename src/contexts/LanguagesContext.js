import React from "react";

//https://react-icons.github.io/react-icons/

//Devicons
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiNodejsSmall
} from "react-icons/di";

//Tabler Icons
import { TbBrandRedux } from "react-icons/tb";

//Simple Icons
import {
  SiStyledcomponents,
  SiBootstrap,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
  SiNextdotjs,
  SiThreedotjs,
  SiMui,
  SiExpress
} from "react-icons/si";

//Ionicons 5
import { IoLogoJavascript } from "react-icons/io5";

//BoxIcons
import {
  BiLogoPostgresql,
  BiLogoPython,
  BiLogoJavascript,
} from "react-icons/bi";

//Levels 1-5
export const LANG_LEVEL = {
  html: {
    icon: <DiHtml5 />,
    level: 4,
  },
  css: {
    icon: <DiCss3 />,
    level: 4,
  },
  javascript: {
    icon: <DiJavascript1 />,
    level: 3,
  },
  mongodb: {
    icon: <DiMongodb />,
    level: 1.5,
  },
  postgresql: {
    icon: <SiPostgresql />,
    level: 2,
  },
  react: {
    icon: <DiReact />,
    level: 2,
  },
  nodejs: {
    icon: <DiNodejsSmall />,
    level: 2.5
  },
  express: {
    icon: <SiExpress />,
    level: 2.5
  },
  redux: {
    icon: <TbBrandRedux />,
    level: 1,
  },
  styledcomponents: {
    icon: <SiStyledcomponents />,
    level: 1.5,
  },
  bootstrap: {
    icon: <SiBootstrap />,
    level: 2.5,
  },
  python: {
    icon: <DiPython />,
    level: "x",
  },
  threejs: {
    icon: <SiThreedotjs />,
    level: "x",
  },
  typescript: {
    icon: <SiTypescript />,
    level: "x",
  },
  nextjs: {
    icon: <SiNextdotjs />,
    level: "x",
  },
  tailwind: {
    icon: <SiTailwindcss />,
    level: "x",
  },
  mui: {
    icon: <SiMui />,
    level: "x",
  }
};

const LanguagesContext = React.createContext(LANG_LEVEL);

export default LanguagesContext;
