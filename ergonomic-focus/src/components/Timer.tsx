import React, {useState, useEffect, useContext} from "react";
import "../styles/components/timer.css";
import "../styles/components/button.css";
import {ReactComponent as RightArrow} from "../assets/images/right-arrow-icon.svg";
import {Button} from "./Button";
import { ChallengesContext } from "../Contexts/ChallengesContext";

let countDownTimeOut: NodeJS.Timeout;

export const Timer = () => {


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

    const [hourLeft, hourRight] = String(hours)
        .padStart(2, '0')
        .split('')
    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('')
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('')

    const [hourLeftFocus, hourRightFocus] = String(focusHours)
        .padStart(2, '0')
        .split('')

    const [minuteLeftFocus, minuteRightFocus] = String(focusMinutes)
        .padStart(
            2,
            '0'
        )
        .split('')
    const [secondLeftFocus, secondRightFocus] = String(focusSeconds)
        .padStart(
            2,
            '0'
        )
        .split('')

    function startCoutDown() {
        setIsActive(true);
        setIsActiveFocus(true);
    }

    function resetCoutDown() {
        // setIsActive(false);
        clearTimeout(countDownTimeOut);
        setIsActiveFocus(false);

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

        if (isActiveFocus && timeFocus < 5) {
            countDownTimeOut = setTimeout(() => {
                setTimeFocus(timeFocus + 1)
            }, 1000)
        } else if (isActiveFocus && timeFocus === 5) {
            setHasFinished(true);
            setIsActiveFocus(false);
            startNewChallenge();
        }

    }, [isActiveFocus, timeFocus, startNewChallenge])

    // else if ( isActive &&) { }

    return (

        <div>

            <div>
                <div className="timer-container">
                    <div className="container-numbers">
                        <div className="number">{hourLeft}</div>
                        <div className="divisor"/>
                        <div className="number">{hourRight}</div>
                    </div>
                    <div className="container-middle">
                        <div className="number">:</div>
                    </div>
                    <div className="container-numbers">
                        <div className="number">{minuteLeft}</div>
                        <div className="divisor"/>
                        <div className="number">{minuteRight}</div>
                    </div>
                    <div className="container-middle">
                        <div className="number">:</div>
                    </div>
                    <div className="container-numbers">
                        <div className="number">{secondLeft}</div>
                        <div className="divisor"/>
                        <div className="number">{secondRight}</div>
                    </div>
                </div>

                {
                    hasFinished
                        ? (
                            <Button
                                onClick={resetCoutDown}
                                color="blue"
                                text={"Ciclo encerrado"}
                                icon={<RightArrow />
}/>
                        )

                        : (

                            <>

                                {
                                    isActiveFocus
                                        ? (

                                            <Button
                                                onClick={resetCoutDown}
                                                color="blue"
                                                text={"Encerrar o ciclo"}
                                                icon={<RightArrow />
}/>

                                        )
                                        : <Button
                                                onClick={startCoutDown}
                                                color="blue"
                                                text={"Iniciar um ciclo"}
                                                icon={<RightArrow />
}/>
                                }
                            </>

                        )
                }

            </div>

            <div className="timer-container">
                <div className="container-numbers">
                    <div className="number">{hourLeftFocus}</div>
                    <div className="divisor"/>
                    <div className="number">{hourRightFocus}</div>
                </div>
                <div className="container-middle">
                    <div className="number">:</div>
                </div>
                <div className="container-numbers">
                    <div className="number">{minuteLeftFocus}</div>
                    <div className="divisor"/>
                    <div className="number">{minuteRightFocus}</div>
                </div>
                <div className="container-middle">
                    <div className="number">:</div>
                </div>
                <div className="container-numbers">
                    <div className="number">{secondLeftFocus}</div>
                    <div className="divisor"/>
                    <div className="number">{secondRightFocus}</div>
                </div>
            </div>

        </div>

    );

};
