import React, { useContext } from "react";
import "../styles/components/profile.css";
import { ReactComponent as Up } from "../assets/images/up-icon.svg";
import { ReactComponent as HalfArrowIcon } from "../assets/images/half-arrow.svg";
import { ChallengesContext } from "../Contexts/ChallengesContext";

type ProfileProps = {
  onClickDashboard: () => void;
  onClickLogOut: () => void;
};

export const Profile = ({ onClickDashboard, onClickLogOut }: ProfileProps) => {
  const { level } = useContext(ChallengesContext);

  return (
    <>
      <div onClick={onClickLogOut} className="go-back-btn">
        <div className="container-back-ico">
          <HalfArrowIcon width="20" height="20" />
        </div>
        Log out
      </div>
      <div className="container-user-info">
        <img
          alt="user-img"
          src={"https://caocidadao.com.br/wp-content/uploads/2019/09/user.png"}
          className="picture"
        />
        <div className="container-name-and-level">
          <span className="name">User name</span>
          <div className="container-user-level">
            <Up />
            <span className="user-level">Level {level}</span> /
            <div className="dashboard-button" onClick={onClickDashboard}>
              Dashboard
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};
