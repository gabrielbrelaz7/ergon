import React, { useContext, useEffect, useState } from "react";
import "../styles/components/profile.css";
import { ReactComponent as Up } from "../assets/images/up-icon.svg";
import { ReactComponent as HalfArrowIcon } from "../assets/images/half-arrow.svg";
import { ChallengesContext } from "../Contexts/ChallengesContext";
import { AuthContext } from "../Contexts/AuthContext";
import { authConfig } from "../auth/config";
import { DashboardContext } from "../Contexts/DashboardContext";

type ProfileProps = {
  onClickDashboard: () => void;
  onClickLogOut: () => void;
};

export const Profile = ({ onClickDashboard, onClickLogOut }: ProfileProps) => {
  const {user} = useContext(AuthContext);

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
          <span className="name">{user.email}</span>
          <div className="container-user-level">
            {/* <Up /> */}
            {/* <span className="user-level">Level {level}</span> / */}
            {/* <div className="dashboard-button" onClick={onClickDashboard}>
              Dashboard
            </div> */}
          </div>
        </div>
      </div>
      <div></div>
    </>
// export const Profile = () => {

// //   const {challengesCompleted, level, currentExperience} = useContext(ChallengesContext);
//   const {user} = useContext(AuthContext);
//   const {levelNow} = useContext(DashboardContext);


//   return (
//     <div className="container-user-info">
//               <img
//                 alt="user-img"
//                 src={
//                   "https://caocidadao.com.br/wp-content/uploads/2019/09/user.png"
//                 }
//                 className="picture"
//               />
//               <div className="container-name-and-level">
//                 <span className="name">{user.email}</span>
//                 <div className="container-user-level">
//                   <Up />
//                   <span className="user-level">Level {levelNow}</span>
//                 </div>
//               </div>
//     </div>

  );
};
