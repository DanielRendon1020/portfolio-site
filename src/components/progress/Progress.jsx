import React from "react";
import { trainingProjects } from "./trainingProjects.js";
import TrainingProjects from "./TrainingProjects.jsx";
import "../../css/style.css";

function Progress() {
  return (
    <>
    <h2 id="training-title">Training Projects</h2>
      <div className="training">
        {trainingProjects.map((tp, i) => (
          <TrainingProjects key={i} project={tp} />
        ))}
      </div>
    </>
  );
}

export default Progress;
