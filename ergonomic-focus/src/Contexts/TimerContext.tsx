import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface TimerContextData {
    minutes: number;
    seconds: number;
    hours: number;
    focusMinutes: number;
    focusSeconds: number;
    focusHours: number;
    hasFinished: boolean;
    isActive: boolean
    isActiveFocus: boolean
    startCoutDown: () =>void;
    resetCoutDown: () => void;
}

interface TimerProvidersProps{
    children: ReactNode;
}


export const TimerContext = createContext({} as TimerContextData);

let countDownTimeOut: NodeJS.Timeout;


export function TimerProvider({ children } : TimerProvidersProps) {

    // Challenges 
    const {startNewChallenge} = useContext(ChallengesContext)

    // Timer Focus

    const [timeFocus, setTimeFocus] = useState(0)

    const focusSeconds = timeFocus % 60;
    const focusMinutes = Math.floor(timeFocus / 60);
    const focusHours = Math.floor(timeFocus / 3600)

    const [isActiveFocus, setIsActiveFocus] = useState(false)

    const [hasFinished, setHasFinished] = useState(false);

    // Timer Now

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const [timeSecond, setTimeSecond] = useState(seconds)
    const [isActive, setIsActive] = useState(false)


        function startCoutDown() {
            setIsActive(true);
            setIsActiveFocus(true);
        }
    
        function resetCoutDown() {
            // setIsActive(false);
            clearTimeout(countDownTimeOut);
            setIsActiveFocus(false);
            setHasFinished(false);
    
        }
    
        useEffect(() => {
    
            if (isActive && timeSecond < 59) {
                countDownTimeOut = setTimeout(() => {
                    setTimeSecond(timeSecond + 1)
                }, 1000)
            }
    
            // else if ( isActive &&) { }
    
        }, [isActive, timeSecond])
    
        useEffect(() => {
    
            if (isActiveFocus && timeFocus < 20) {
                countDownTimeOut = setTimeout(() => {
                    setTimeFocus(timeFocus + 1)
                }, 1000)

                if (isActiveFocus && 
                    timeFocus === 5 || 
                    timeFocus === 10 || 
                    timeFocus === 15 ) {
                    setHasFinished(true);
                    setIsActiveFocus(false);
                    startNewChallenge();
                }
            }

    
        }, [isActiveFocus, timeFocus, startNewChallenge])


    return(

        <TimerContext.Provider 
        value=
        {{
            minutes,
            seconds,
            hours,
            focusMinutes,
            focusSeconds,
            focusHours,
            hasFinished,
            isActive,
            isActiveFocus,
            startCoutDown, 
            resetCoutDown,
            
        }}>

            {children}

        </TimerContext.Provider>


    )


}
