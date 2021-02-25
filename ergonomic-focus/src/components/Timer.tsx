import React from "react";
import "../styles/components/timer.css";

export const Timer = () => {
  return (
    <div className="timer-container">
    <div className="container-numbers">
      <div className="number">2</div>
      <div className="divisor" />
      <div className="number">5</div>
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

  );
};
