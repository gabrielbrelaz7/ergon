import React from "react";

import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompleteChallenges } from "./components/CompleteChallenges";
import { Timer } from "./components/Timer";

import "./styles/global.css";
import { ComponentExample } from "./components/ComponentExamples";

const App = () => {
  return (
    <div>
      <div className="container">
        <ExperienceBar />
        <div className="container-content">
          <div className="card invisible">
            <div className="container-info">
              <Profile />

              <CompleteChallenges />

              <Timer />
            </div>
          </div>

          <div className="card" />
        </div>
      </div>
      <ComponentExample />
    </div>
  );
};

export default App;
