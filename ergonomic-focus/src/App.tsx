import React from "react";

import { ExperienceBar } from "./components/ExperienceBar";
import { Profile } from "./components/Profile";
import { CompleteChallenges } from "./components/CompleteChallenges";
import { Timer } from "./components/Timer";

import "./styles/global.css";
import { ComponentExample } from "./components/ComponentExamples";
import { ChallengeBox } from "./components/ChallengeBox";
import { ChallengesProvider } from "./Contexts/ChallengesContext";
import { TimerProvider } from "./Contexts/TimerContext";
import { BrowserRouter, Route } from "react-router-dom";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { AuthProvider } from "./Contexts/AuthContext";
import { PrivateRoute } from "./auth/PrivateRoute";
import { Dashboard } from "./components/Dashboard";

// import * as firebase from 'firebase';

const HomePage = () => {
  return (
    <TimerProvider>
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

            
              <ChallengeBox />
            
          </div>
        </div>
        <ComponentExample />
      </div>
    </TimerProvider>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ChallengesProvider>
        <BrowserRouter>
          <div className="container-project-name">
            <span>Ergon Focus</span>
          </div>
          <PrivateRoute exact path="/" component={HomePage} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </BrowserRouter>
      </ChallengesProvider>
    </AuthProvider>
  );
};

export default App;
