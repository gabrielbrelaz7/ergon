import {createContext, ReactNode, useContext, useEffect, useState} from 'react';
import { authConfig } from '../auth/config';
import challenges from '../utils/challenges.json';
import { AuthContext } from './AuthContext';
import { DashboardContext } from './DashboardContext';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextData {
    experienceToNextLevel: number;
    currentExperience: number;  
    startNewChallenge: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    completeChallenge: () => void;
}


interface ChallengesProvidersProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

const allChallenges = challenges as Challenge[];

export function ChallengesProvider({ children } : ChallengesProvidersProps) {

const {experienceNow, experienceToNextLevel, levelNow, challengesNow} = useContext(DashboardContext)

const {user} = useContext(AuthContext)

const [activeChallenge, setActiveChallenge] = useState<Challenge>({} as Challenge);

const [currentExperience, setCurrentExperience] = useState(0);


useEffect(() =>{
    Notification.requestPermission();
},[]
)

function LevelUp(amount: number) {
    
    
    let  finalExperience = experienceNow + amount;

        const experienceUp = finalExperience 

        const challengesUp = challengesNow + 1;

        const levelUp = levelNow + 1; 


        const insertDashboard = {
            challengesCompleted: challengesUp,
            username: user.email,
            level: levelUp,
            experience: experienceUp,
        };

        authConfig
            .database()
            .ref(`dashboard/${btoa(insertDashboard.username)}`)
            .set(insertDashboard)
}


function updateBD(amount: number) {

        let  finalExperience = experienceNow + amount;

        const experienceUp = experienceNow + finalExperience 

        const challengesUp = challengesNow + 1;

        const insertDashboard = {
            challengesCompleted: challengesUp,
            username: user.email,
            level: levelNow,
            experience: experienceUp,
        };

        authConfig
            .database()
            .ref(`dashboard/${btoa(insertDashboard.username)}`)
            .set(insertDashboard)
}

function startNewChallenge() {
    const randowChallengeIndex = Math.floor(Math.random() * allChallenges.length);
    const challenge = allChallenges[randowChallengeIndex];

    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();

    if(Notification.permission === 'granted') {
        new Notification('Novo desafio', {
            body: `Valendo ${challenge.amount}xp!`
        })
    }
}

function resetChallenge() {
    setActiveChallenge({} as Challenge)
}

function completeChallenge() {
    if(!activeChallenge) {
        return;
    }

    const {amount} = activeChallenge;
    let  finalExperience = currentExperience + amount;

    if (finalExperience >= experienceToNextLevel) {
        
        finalExperience = finalExperience - experienceToNextLevel

        setCurrentExperience(finalExperience);

        LevelUp(amount);   
    }

    else {

        setCurrentExperience(finalExperience);

        updateBD(amount);
    }
    

    setActiveChallenge({} as Challenge);

}

return(

<ChallengesContext.Provider 
value={{
    startNewChallenge,
    activeChallenge,
    resetChallenge, 
    experienceToNextLevel,
    completeChallenge,
    currentExperience,
    }}>

    {children}

</ChallengesContext.Provider>

);


}