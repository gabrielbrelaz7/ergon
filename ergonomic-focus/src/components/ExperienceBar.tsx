import React, { useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import { DashboardContext } from "../Contexts/DashboardContext";
import "../styles/components/experience-bar.css";

export const ExperienceBar = () => {

  const {experienceToNextLevel, experienceNow} = useContext(DashboardContext)

  const {currentExperience} = useContext(ChallengesContext)


  // const percentToNextLevel = Math.round({currentExperience}) * 100 / {experienceToNextLevel};

  return (
    <header className="experience-bar-container">
      <span>0 xp</span>
      <div className="experience-bar">
        <div className="bar">
          <span className="current-experience">{experienceNow} xp</span>
        </div>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
};
