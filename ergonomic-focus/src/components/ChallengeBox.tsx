import "../styles/components/challenge-box.css";
import "../styles/components/component-examples.css";

// import { ReactComponent as RightArrow } from
// "../assets/images/right-arrow-icon.svg"; import { ReactComponent as CheckIcon
// } from "../assets/images/check-icon.svg"; import { ReactComponent as
// CloseIcon } from "../assets/images/close-icon.svg";
import { ReactComponent as ExerciseIcon } from "../assets/images/exercise-icon.svg";
import { ReactComponent as ChallengeUpIcon } from "../assets/images/challenge-up.svg";
// import { ReactComponent as EyeIcon } from "../assets/images/eye-icon.svg";
import { Button } from "./Button";
import { useContext } from "react";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import { TimerContext } from "../Contexts/TimerContext";

export const ChallengeBox = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { restartCoutDown } = useContext(TimerContext);


  function handleChallengeSuccessed() {
    completeChallenge();
    restartCoutDown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    restartCoutDown();
  }

  return (
    <div className="card">
      {Object.entries(activeChallenge).length !== 0 ? (
        <>
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
            <Button onClick={handleChallengeFailed} color="red" text="Failed" />
            <Button
              onClick={handleChallengeSuccessed}
              color="green"
              text="Completed"
            />
          </div>
        </>
      ) : (
        <div className="container-challenge-not-active">
          <div className="container-not-active-title">
            <span className="not-active-title">
              Start to gettting challenges to be completed
            </span>
          </div>
          <div className="container-not-active-icon">
            <ChallengeUpIcon />
          </div>
          <div className="container-not-active-subtitle">
            <span className="not-active-subtitle">
              Complete challenges and advance to the next level
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
