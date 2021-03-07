import React, { useContext } from "react";
import "../styles/components/timer.css";
import "../styles/components/button.css";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow-icon.svg";
import { ReactComponent as CheckIcon } from "../assets/images/check-icon.svg";
import { Button } from "./Button";
import { TimerContext } from "../Contexts/TimerContext";

export const Timer = () => {
  const {
    focusHours,
    focusMinutes,
    focusSeconds,
    hasFinished,
    resetCoutDown,
    isActiveFocus,
    startCoutDown,
    restartCoutDown
  } = useContext(TimerContext);

  // const [hourLeft, hourRight] = String(hours)
  //     .padStart(2, '0')
  //     .split('')
  // const [minuteLeft, minuteRight] = String(minutes)
  //     .padStart(2, '0')
  //     .split('')
  // const [secondLeft, secondRight] = String(seconds)
  //     .padStart(2, '0')
  //     .split('')

  const [hourLeftFocus, hourRightFocus] = String(focusHours)
    .padStart(2, "0")
    .split("");

  const [minuteLeftFocus, minuteRightFocus] = String(focusMinutes)
    .padStart(2, "0")
    .split("");
  const [secondLeftFocus, secondRightFocus] = String(focusSeconds)
    .padStart(2, "0")
    .split("");

  return (
    <div>
      <div className="timer-container">
        <div className="container-numbers">
          <div className="number">{hourLeftFocus}</div>
          <div className="divisor" />
          <div className="number">{hourRightFocus}</div>
        </div>
        <div className="container-middle">
          <div className="number">:</div>
        </div>
        <div className="container-numbers">
          <div className="number">{minuteLeftFocus}</div>
          <div className="divisor" />
          <div className="number">{minuteRightFocus}</div>
        </div>
        <div className="container-middle">
          <div className="number">:</div>
        </div>
        <div className="container-numbers">
          <div className="number">{secondLeftFocus}</div>
          <div className="divisor" />
          <div className="number">{secondRightFocus}</div>
        </div>
      </div>

      <div>
        {hasFinished ? (
          <Button
            onClick={restartCoutDown}
            color="white-greenb"
            text={"Continue focus time"}
            icon={<CheckIcon />}
          />
        ) : (
          <>
            {isActiveFocus ? (
              <Button
                onClick={resetCoutDown}
                color="blue"
                text={"End focus time"}
                icon={<RightArrow />}
              />
            ) : (
              <Button
                onClick={startCoutDown}
                color="blue"
                text={"Start focus time"}
                icon={<RightArrow />}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};
