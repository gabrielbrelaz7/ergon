import React, {createContext, ReactNode, useEffect, useState} from 'react';
import challenges from '../utils/challenges.json';


interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}


interface ChallengesContextData {
    level: number;
    currentExperience: number;
    experienceToNextLevel: number;  
    challengesCompleted:  number;
    LevelUp: () => void;
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

const [level, setLevel] = useState(1);
const [currentExperience, setCurrentExperience] = useState(0);
const [challengesCompleted, setChallengesCompleted] = useState(0);
const [activeChallenge, setActiveChallenge] = useState<Challenge>({} as Challenge);

const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

useEffect(() =>{
    Notification.requestPermission();
},[]
)

function LevelUp() {
    setLevel(level + 1);
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
        finalExperience = finalExperience - experienceToNextLevel;
        LevelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge({} as Challenge);
    setChallengesCompleted(challengesCompleted + 1)

}

return(

<ChallengesContext.Provider 
value={{
    level, 
    currentExperience, 
    challengesCompleted,
    LevelUp,
    startNewChallenge,
    activeChallenge,
    resetChallenge, 
    experienceToNextLevel,
    completeChallenge
    }}>

    {children}

</ChallengesContext.Provider>

);


}