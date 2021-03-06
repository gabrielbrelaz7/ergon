import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { Loading } from "../components/Loading";
import { AuthContext } from "./AuthContext";
import { ChallengesContext } from "./ChallengesContext";

interface DashboardContextData {
    challengesNow: number,
    levelNow: number,
    experienceNow : number,
}

type NewType = ReactNode;

interface DashboardProviderProps {
  children: NewType;
}

export const DashboardContext= createContext({} as DashboardContextData);


export function DashboardProvider({ children }: DashboardProviderProps) {


    const {challengesCompleted, level, currentExperience} = useContext(ChallengesContext);

    const {user} = useContext(AuthContext);

    
    const [levelNow, setLevel] = useState(level)
    const [experienceNow, setExperience] = useState(challengesCompleted)
    const [challengesNow, setChallenges] = useState(currentExperience)

  useEffect(() => {

  authConfig
    .database()
    .ref(`dashboard/${btoa(user.email)}`)
    .on(('value'), (snapshot) => {
        const userData = snapshot.val();

        for(let data in userData) {

          const levelNow = userData[data].level
          const experienceNow = userData[data].experience
          const challengesNow = userData[data].challenges


          setLevel(levelNow)
          setExperience(experienceNow)
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

}, [])

    return (
        <DashboardContext.Provider
          value={{
            challengesNow,
            experienceNow,
            levelNow,
          }}
        >
          {children}
        </DashboardContext.Provider>
      );

} 
  


