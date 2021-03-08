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

  // useEffect(() => {


  //   let challengesNow = 0

  //   setChallenges(challengesNow)

  authConfig
    .database()
    .ref(`timerDate/${btoa(user.email)}`)
    .on(('value'), (snapshot) => {


        const userData = snapshot.val();

        for(let data in userData) {

          let challengesNow = userData[data]

          console.log(challengesNow)
          

        }
        

        })

  //       // if (userData === null) {

  //       //   console.log("Inserindo dados no Firebase")

  //       //     const insertDashboard = {
  //       //         challengesCompleted: challengesNow,
  //       //         username: user.email,
  //       //         level: levelNow,
  //       //         experience: experienceNow
  //       //     };

  //       //     authConfig
  //       //         .database()
  //       //         .ref(`dashboard/${btoa(insertDashboard.username)}`)
  //       //         .push(insertDashboard)

  //       // }

  // })

// }, [])

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
  


