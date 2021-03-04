import React, { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import "../styles/components/complete-challenges.css";



export const CompleteChallenges = () => {

  const {challengesCompleted} = useContext(ChallengesContext);

  return (
<div className="challenges-number-container">
              <span>Completed challenges</span>
              <span>{challengesCompleted}</span>
            </div>

  );
};



