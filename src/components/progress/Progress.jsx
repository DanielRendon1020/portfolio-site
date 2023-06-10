import React from "react";
import { trainingProjects } from "./trainingProjects.js";
import TrainingProjects from "./TrainingProjects.jsx";
import "./progress.css";



const Progress = () => {
  return <div className="training">
    {trainingProjects.map((tp, i) => (
      <TrainingProjects key={i} project={tp} />
    ))}
  </div>
};

export default Progress;
