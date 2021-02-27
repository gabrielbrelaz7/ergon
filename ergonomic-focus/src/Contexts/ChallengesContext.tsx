import {createContext, ReactNode, useState} from 'react';
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

function LevelUp() {
    setLevel(level + 1);
}

function startNewChallenge() {
    const randowChallengeIndex = Math.floor(Math.random() * allChallenges.length);
    const challenge = allChallenges[randowChallengeIndex];

    setActiveChallenge(challenge);
}

function resetChallenge() {
    setActiveChallenge({} as Challenge)
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
    experienceToNextLevel
    }}>

    {children}

</ChallengesContext.Provider>

);


}