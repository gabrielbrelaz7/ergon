import React, { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import "../styles/components/experience-bar.css";

export const ExperienceBar = () => {

  const {currentExperience, experienceToNextLevel} = useContext(ChallengesContext)

  // const percentToNextLevel = Math.round({currentExperience}) * 100 / {experienceToNextLevel};

  return (
    <header className="experience-bar-container">
      <span>0 xp</span>
      <div className="experience-bar">
        <div className="bar">
          <span className="current-experience">{currentExperience} xp</span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};
