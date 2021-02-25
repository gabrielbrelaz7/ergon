import React from "react";
import "../styles/components/timer.css";
import "../styles/components/button.css";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow-icon.svg";


export const Timer = () => {

  function getTime() {

    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    console.log(hours + ":"  + minutes + ":"  +  seconds);

  }


  return (

    <div>
    <div className="timer-container">
        <div className="container-numbers">
      <div className="number">0</div>
      <div className="divisor" />
      <div className="number">0</div>
    </div> 
    <div className="container-middle">
      <div className="number">:</div>
    </div> 
    <div className="container-numbers">
      <div className="number">0</div>
      <div className="divisor" />
      <div className="number">0</div>
    </div>
    <div className="container-middle">
      <div className="number">:</div>
    </div>
    <div className="container-numbers">
      <div className="number">0</div>
      <div className="divisor" />
      <div className="number">0</div>
    </div>
  </div>

  <div onClick={getTime}>
    <div className="button blue">
        <span className="btn-text">
          Iniciar um ciclo
        </span>
      <div className="container-btn-icon">
        <RightArrow />
      </div>
    </div>
  </div>
  </div>

  );
};