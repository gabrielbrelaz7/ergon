import React, { useState, useEffect } from "react";
import "../styles/components/timer.css";
import "../styles/components/button.css";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow-icon.svg";
import { Button } from "./Button";


export const Timer = () => {


const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

const [timeSecond, setTimeSecond] = useState(seconds)
const [active, setActive] = useState(false)

const [hourLeft, hourRight] = String(hours)
    .padStart(2, '0')
    .split('')
const [minuteLeft, minuteRight] = String(minutes)
    .padStart(2, '0')
    .split('')
const [secondLeft, secondRight] = String(seconds)
    .padStart(2, '0')
    .split('')


function startCoutDown() {
    setActive(true);
}

useEffect(() => {

    if (active && timeSecond < 59) {
        setInterval(() => {
            setTimeSecond(timeSecond + 1)
        }, 1000)
    }

}, [active, timeSecond])

  return (
    <div>
      <div className="timer-container">
        <div className="container-numbers">
          <div className="number">{hourLeft}</div>
          <div className="divisor" />
          <div className="number">{hourRight}</div>
        </div>
        <div className="container-middle">
          <div className="number">:</div>
        </div>
        <div className="container-numbers">
          <div className="number">{minuteLeft}</div>
          <div className="divisor" />
          <div className="number">{minuteRight}</div>
        </div>
        <div className="container-middle">
          <div className="number">:</div>
        </div>
        <div className="container-numbers">
          <div className="number">{secondLeft}</div>
          <div className="divisor" />
          <div className="number">{secondRight}</div>
        </div>
      </div>

      <Button
        onClick={startCoutDown}
        color="blue"
        text="Iniciar um ciclo"
        icon={<RightArrow />}
      />
    </div>
  );
};
