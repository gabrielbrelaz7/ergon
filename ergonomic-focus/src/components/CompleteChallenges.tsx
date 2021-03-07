import React, { useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import { DashboardContext } from "../Contexts/DashboardContext";
import "../styles/components/complete-challenges.css";


export const CompleteChallenges = () => {


  const {challengesNow} = useContext(DashboardContext)

  return (
<div className="challenges-number-container">
              <span>Complete challenges</span>
              <span>{challengesNow}</span>
            </div>

  );
};



