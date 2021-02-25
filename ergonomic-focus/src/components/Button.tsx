import React from "react";
import { ReactComponent as RightArrow } from "../assets/images/right-arrow-icon.svg";
import "../styles/components/button.css";



export const Button = () => {
  return (
<div>
<div className="button blue">
  <span className="btn-text">Iniciar um ciclo</span>
  <div className="container-btn-icon">
    <RightArrow />
  </div>
</div>
</div>

  );
};





