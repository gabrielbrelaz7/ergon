import "../styles/components/challenge-box.css";
import "../styles/components/component-examples.css";

// import { ReactComponent as RightArrow } from
// "../assets/images/right-arrow-icon.svg"; import { ReactComponent as CheckIcon
// } from "../assets/images/check-icon.svg"; import { ReactComponent as
// CloseIcon } from "../assets/images/close-icon.svg";
import {ReactComponent as ExerciseIcon} from "../assets/images/exercise-icon.svg";
// import { ReactComponent as EyeIcon } from "../assets/images/eye-icon.svg";
import {Button} from "./Button";
import {useContext} from "react";
import {ChallengesContext} from "../Contexts/ChallengesContext";

export const ChallengeBox = () => {

    const {activeChallenge, resetChallenge} = useContext(ChallengesContext);

    return (

        <div>

            {
                Object
                    .entries(activeChallenge)
                    .length !== 0
                        ? (

                            <div>

                                <div className="container-title">
                                    <span className="card-title-exp">Ganhe {activeChallenge.amount}
                                        xp</span>
                                </div>
                                <div>
                                    <ExerciseIcon/>
                                </div>
                                <div className="container-info-card">
                                    <span className="info-card-title">Exercite-se
                                    </span>
                                    <span className="info-card-info">
                                        {activeChallenge.description}
                                    </span>
                                </div>
                                <div className="container-btns">
                                    <Button onClick={resetChallenge} color="red" text="Falhei"/>
                                    <Button onClick={() => {}} color="green" text="Completei"/>
                                </div>

                            </div>

                        )

                        : (

                            <div className="challengeNotActive">

                                <div>
                                    Start to gettting challenges to be completed
                                </div>

                                <div>
                                    Complete challenges and advance to the next level
                                </div>

                            </div>

                        )
            }

        </div>

    );
};