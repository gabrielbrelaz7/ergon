import React from "react";
import "../styles/components/dashboard.css";
import { ReactComponent as HalfArrowIcon } from "../assets/images/half-arrow.svg";

type DashboardProps = {
  name: string;
  userName: string;
  email: string;
  totalHours: string;
  challengesCompleted: number;
  history: {
    goBack: () => void;
  };
};

export const Dashboard = ({
  name = "name",
  userName,
  email,
  totalHours,
  challengesCompleted,
  history: { goBack },
}: DashboardProps) => {
  return (
    <div className="container">
      <div onClick={() => goBack()} className="go-back-btn">
        <div className="container-back-ico">
          <HalfArrowIcon width="20" height="20" />
        </div>
        Go back
      </div>
      <div className="container-content">
        <div className="card dashboard">
          <div className="container-title">
            <span>Challenges information</span>
          </div>
          <div className="section">
            <span className="dashboard-title">Hey</span>
            <span className="dashboard-subtitle">Hey</span>
          </div>
        </div>
        <div className="card invisible dashboard">
          <div className="container-title">
            <span>Profile information</span>
          </div>
          <div className="section">
            <span className="dashboard-title">Name</span>
            <span className="dashboard-subtitle">{name}</span>
          </div>
          <div className="section">
            <span className="dashboard-title">Email</span>
            <span className="dashboard-subtitle">{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
