import React from "react";
import "../styles/components/experience-bar.css";

export const ExperienceBar = () => {
  return (
    <header className="experience-bar-container">
      <span>0 xp</span>
      <div className="experience-bar">
        <div className="bar">
          <span className="current-experience">400 xp</span>
        </div>
      </div>
      <span>600 xp</span>
    </header>
  );
};
