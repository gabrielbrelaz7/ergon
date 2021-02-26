import React from "react";

type ButtonTypeProps = {
  onClick: () => void;
  color: string;
  text: string;
  icon?: React.ReactNode;
};

export const Button: React.FC<ButtonTypeProps> = ({
  onClick,
  color,
  text,
  icon,
}) => (
  <div onClick={onClick} className={`button ${color}`}>
    <span className="btn-text">{text}</span>
    {icon && <div className="container-btn-icon">{icon}</div>}
  </div>
);
