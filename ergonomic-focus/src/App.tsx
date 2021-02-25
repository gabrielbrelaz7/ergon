import React from "react";

import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompleteChallenges } from "./components/CompleteChallenges";
import { Timer } from "./components/Timer";
import { Button } from "./components/Button";


import "./styles/global.css";


const App = () => {
  return (
    <div className="container">
      <ExperienceBar />
      <div className="container-content">
        <div className="card invisible">
          <div className="container-info">

          <Profile />

          <CompleteChallenges />

          <Timer />

          <Button />
    
          </div>
        </div>

        <div className="card" />
      </div>
    </div>
  );
};

export default App;
