import React from "react";
import "../styles/components/component-examples.css";

import { ReactComponent as RightArrow } from "../assets/images/right-arrow-icon.svg";
import { ReactComponent as CheckIcon } from "../assets/images/check-icon.svg";
import { ReactComponent as CloseIcon } from "../assets/images/close-icon.svg";
import { ReactComponent as ExerciseIcon } from "../assets/images/exercise-icon.svg";
import { ReactComponent as EyeIcon } from "../assets/images/eye-icon.svg";
import { Button } from "./Button";

export const ComponentExample = () => (
  <div className="examples">
    <h1>Components examples</h1>
    <div className="examples-container">
      <div className="card">
        <Button
          onClick={() => {}}
          color="blue"
          text="Example"
          icon={<RightArrow />}
        />
        <Button
          onClick={() => {}}
          color="white"
          text="Example"
          icon={<CloseIcon />}
        />
        <Button
          onClick={() => {}}
          color="white-greenb"
          text="Example"
          icon={<CheckIcon />}
        />
        <Button onClick={() => {}} color="red" text="Example" />
        <Button onClick={() => {}} color="green" text="Example" />
      </div>
      <div className="card">
        <div className="container-title">
          <span className="card-title-exp">Ganhe 400 xp</span>
        </div>
        <div>
          <ExerciseIcon />
        </div>
        <div className="container-info-card">
          <span className="info-card-title">Exercite-se </span>
          <span className="info-card-info">
            É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique
            suas pernas pra você ficar saudável.
          </span>
        </div>
        <div className="container-btns">
          <Button onClick={() => {}} color="red" text="Falhei" />
          <Button onClick={() => {}} color="green" text="Completei" />
        </div>
      </div>
      <div className="card">
        <div className="container-title">
          <span className="card-title-exp">Ganhe 400 xp</span>
        </div>
        <div>
          <EyeIcon />
        </div>
        <div className="container-info-card">
          <span className="info-card-title">Mova os olhos </span>
          <span className="info-card-info">
            É agora Diegão, bora lá meu parça. Caminhe por 3 minutos e estique
            suas pernas pra você ficar saudável.
          </span>
        </div>
        <div className="container-btns">
          <Button onClick={() => {}} color="red" text="Falhei" />
          <Button onClick={() => {}} color="green" text="Completei" />
        </div>
      </div>
    </div>
  </div>
);
