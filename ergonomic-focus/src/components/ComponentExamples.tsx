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
          <span className="card-title-exp">Earn 400 xp</span>
        </div>
        <div>
          <ExerciseIcon />
        </div>
        <div className="container-info-card">
          <span className="info-card-title">Work out </span>
          <span className="info-card-info">
            Walk for 3 minutes and stretch your legs to stay healthy.
          </span>
        </div>
        <div className="container-btns">
          <Button onClick={() => {}} color="red" text="Failed" />
          <Button onClick={() => {}} color="green" text="Completed" />
        </div>
      </div>
      <div className="card">
        <div className="container-title">
          <span className="card-title-exp">Earn 400 xp</span>
        </div>
        <div>
          <EyeIcon />
        </div>
        <div className="container-info-card">
          <span className="info-card-title">Move your eyes </span>
          <span className="info-card-info">
            Walk for 3 minutes and stretch your legs to stay healthy.
          </span>
        </div>
        <div className="container-btns">
          <Button onClick={() => {}} color="red" text="Failed" />
          <Button onClick={() => {}} color="green" text="Completed" />
        </div>
      </div>
    </div>
  </div>
);
