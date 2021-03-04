import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { authConfig } from "../auth/config";
import { AuthContext } from "./AuthContext";
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
    const {startNewChallenge} = useContext(ChallengesContext);

    const {user} = useContext(AuthContext);

    // Timer Focus

    const [timeFocus, setTimeFocus] = useState(0)

    const focusSeconds = timeFocus % 60;
    const focusMinutes = Math.floor(timeFocus / 60);
    const focusHours = Math.floor(timeFocus / 3600)

    const [isActiveFocus, setIsActiveFocus] = useState(false)

    const [hasFinished, setHasFinished] = useState(false);


    const [isActive, setIsActive] = useState(false)


                // Timer Now

                const now = new Date();

                const hours = now.getHours();
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();


        function startCoutDown() {
            setIsActive(true);
            setIsActiveFocus(true);

        // Timer Now

        const now = new Date();

        const day = now.getDate();
        const moth = now.getMonth()+1; 
        const year = now.getFullYear();

        const hours = now.getHours();
        const minutes = now.getMinutes();

        const date = (moth + "/" + day + "/" + year)
        const datetime = (hours + ":" + minutes)


        const insertDB = {
            username: user.email,
            datetimeStart: datetime,
            datetimeEnd: "",
            date: date,
        };


        authConfig.database().ref(`timerDay/${btoa(insertDB.username)}`)

        .push(insertDB)

        }

        const [timeSecond, setTimeSecond] = useState(seconds)


        useEffect(() => {
    
            if (isActive && timeSecond < 59) {
                countDownTimeOut = setTimeout(() => {
                    setTimeSecond(timeSecond + 1)
                }, 1000)
            }
    
            // else if ( isActive &&) { }
    
        }, [isActive, timeSecond])
    
        function resetCoutDown() {

            console.log(timeFocus);

            // setIsActive(false);
            clearTimeout(countDownTimeOut);
            setIsActiveFocus(false);
            setHasFinished(false);

            const hours = now.getHours();
            const minutes = now.getMinutes();
            const datetime = (hours + ":" + minutes)

            console.log(user)
            console.log(datetime)

        }

    
        useEffect(() => {
    
            if (isActiveFocus && timeFocus < 20) {
                countDownTimeOut = setTimeout(() => {
                    setTimeFocus(timeFocus + 1)
                }, 1000)

                if (isActiveFocus && (
                    timeFocus === 5 || 
                    timeFocus === 10 || 
                    timeFocus === 15) ) {
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
