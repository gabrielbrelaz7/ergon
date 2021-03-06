import React, { useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import "../styles/components/experience-bar.css";

export const ExperienceBar = () => {



  const {currentExperience, experienceToNextLevel, challengesCompleted, level} = useContext(ChallengesContext)


  const {user} = useContext(AuthContext);

  const [experienceNow, setExperience] = useState(currentExperience)


useEffect(() => {

authConfig
  .database()
  .ref(`dashboard/${btoa(user.email)}`)
  .on(('value'), (snapshot) => {
      const userData = snapshot.val();

      for(let data in userData) {

        const experienceNow = userData[data].experience


        setExperience(experienceNow)
                
      }

      if (snapshot.val() === null) {

          const insertDashboard = {
              challengesCompleted: challengesCompleted,
              username: user.email,
              level: level,
              experience: currentExperience
          };

          authConfig
              .database()
              .ref(`dashboard/${btoa(insertDashboard.username)}`)
              .push(insertDashboard)
            }

          })
        
        }, []);



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
