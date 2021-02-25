import React from "react";

import { ReactComponent as RightArrow } from "./assets/images/right-arrow-icon.svg";
import { ReactComponent as Up } from "./assets/images/up-icon.svg";
import { ExperienceBar } from "./components/ExperienceBar";
import "./styles/global.css";

const App = () => {
  return (
    <div className="container">
      <ExperienceBar />
      <div className="container-content">
        <div className="card invisible">
          <div className="container-info">
            <div className="container-user-info">
              <img
                alt="user-img"
                src={
                  "https://caocidadao.com.br/wp-content/uploads/2019/09/user.png"
                }
                className="picture"
              />
              <div className="container-name-and-level">
                <span className="name">User name</span>
                <div className="container-user-level">
                  <Up />
                  <span className="user-level">Level 1</span>
                </div>
              </div>
            </div>
            <div className="challenges-number-container">
              <span>Desafios completos</span>
              <span>00</span>
            </div>
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
            <div>
              <div className="button blue">
                <span className="btn-text">Iniciar um ciclo</span>
                <div className="container-btn-icon">
                  <RightArrow />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card" />
      </div>
    </div>
  );
};

export default App;
