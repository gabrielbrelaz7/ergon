import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { Loading } from "../components/Loading";
import { AuthContext } from "./AuthContext";
import { ChallengesContext } from "./ChallengesContext";

interface DashboardContextData {
    challengesNow: number,
    levelNow: number,
    experienceNow : number,
    experienceToNextLevel: number,
}

type NewType = ReactNode;

interface DashboardProviderProps {
  children: NewType;
}

export const DashboardContext= createContext({} as DashboardContextData);

export function DashboardProvider({ children }: DashboardProviderProps) {


    const {user} = useContext(AuthContext);

    
    const [levelNow, setLevel] = useState(1)
    const [experienceNow, setExperience] = useState(0)
    const [challengesNow, setChallenges] = useState(0)
    

    const experienceToNextLevel = Math.pow((levelNow + 1) * 4, 2)

  useEffect(() => {

    let levelNow = 1
    let experienceNow = 0
    let challengesNow = 0

    setLevel(levelNow)
    setExperience(experienceNow)
    setChallenges(challengesNow)

  authConfig
    .database()
    .ref(`dashboard/${btoa(user.email)}`)
    .on(('value'), (snapshot) => {
        const userData = snapshot.val();

        if (userData !== null || (experienceNow > 0 && challengesNow > 0)) {

          console.log("Entrando ")

            let levelNow = userData.level
            let experienceNow = userData.experience
            let challengesNow = userData.challengesCompleted

            setLevel(levelNow)
            setExperience(experienceNow)
            setChallenges(challengesNow)

        }

        if (userData === null) {

          console.log("Inserindo dados no Firebase")

            const insertDashboard = {
                challengesCompleted: challengesNow,
                username: user.email,
                level: levelNow,
                experience: experienceNow
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
            experienceToNextLevel,
          }}
        >
          {children}
        </DashboardContext.Provider>
      );

} 
  


