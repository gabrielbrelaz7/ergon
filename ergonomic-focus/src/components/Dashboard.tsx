import React, { useContext } from "react";
import "../styles/components/dashboard.css";
import { ReactComponent as HalfArrowIcon } from "../assets/images/half-arrow.svg";
import { DashboardContext } from "../Contexts/DashboardContext";
import { authConfig } from "../auth/config";
import { AuthContext } from "../Contexts/AuthContext";

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


  const {user} = useContext(AuthContext)

  authConfig
  .database()
  .ref(`timerDate/${btoa(user.email)}`)
  .on(('value'), (snapshot) => {


      const userData = snapshot.val();

      for(let data in userData) {

        const challengesNow = userData[data].timer


        addTimer(challengesNow);
        

      }

      function addTimer(timers: number) {

        const timerTotal = timers++

        console.log(timerTotal)

      }
      

      })

  // const {} = useContext(DashboardContext)


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
            <span>History work log</span>
            {/* <span className="dashboard-title">{challengesNow}</span> */}

          </div>

        </div>
        <div className="card invisible dashboard">
          <div className="container-title">
            <span>Total focus time</span>
          </div>
          <div className="section">
            <span className="dashboard-title">Profile</span>
            <span className="dashboard-subtitle">Email</span>
            <span className="dashboard-subtitle">Username</span>
          </div>
 
        </div>
      </div>
    </div>
  );
};