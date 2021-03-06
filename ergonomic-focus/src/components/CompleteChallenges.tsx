import React, { useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import "../styles/components/complete-challenges.css";


export const CompleteChallenges = () => {

  const {challengesCompleted, level, currentExperience} = useContext(ChallengesContext);

  const {user} = useContext(AuthContext);

  const [challengesNow, setChallenges] = useState(challengesCompleted)


useEffect(() => {

authConfig
  .database()
  .ref(`dashboard/${btoa(user.email)}`)
  .on(('value'), (snapshot) => {
      const userData = snapshot.val();

      for(let data in userData) {

        const challengesNow = userData[data].challengesCompleted


        setChallenges(challengesNow)
                
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
  
  return (
<div className="challenges-number-container">
              <span>Complete challenges</span>
              <span>{challengesNow}</span>
            </div>

  );
};



