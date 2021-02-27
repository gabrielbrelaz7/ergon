import React from "react";

import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompleteChallenges } from "./components/CompleteChallenges";
import { Timer } from "./components/Timer";

import "./styles/global.css";
import { ComponentExample } from "./components/ComponentExamples";
import { ChallengeBox } from "./components/ChallengeBox";
import { ChallengesProvider } from "./Contexts/ChallengesContext";

const App = () => {
  return (
    <ChallengesProvider>
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

          <div className="card">
              
                <ChallengeBox />
            </div>

        

        </div>
      </div>
      <ComponentExample />
    </div>

  </ChallengesProvider>

)
};

export default App;
