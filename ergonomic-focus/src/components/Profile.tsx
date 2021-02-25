import React from "react";
import "../styles/components/profile.css";
import { ReactComponent as Up } from "../assets/images/up-icon.svg";


export const Profile = () => {
  return (
    <div className="container-user-info">
              <img
                alt="user-img"
                src={
                  "https://caocidadao.com.br/wp-content/uploads/2019/09/user.png"
                }
                className="picture"
              />
              <div className="container-name-and-level">
                <span className="name">User name</span>
                <div className="container-user-level">
                  <Up />
                  <span className="user-level">Level 1</span>
                </div>
              </div>
    </div>

  );
};
