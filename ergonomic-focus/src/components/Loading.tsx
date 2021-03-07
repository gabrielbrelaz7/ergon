import React from "react";
import "../styles/components/loading.css";

type LoadingProps = {
  width?: number;
  height?: number;
  containerSize?: LoadingProps;
};

export const Loading = ({
  width = 80,
  height = 80,
  containerSize,
}: LoadingProps) => (
  <div className="lds-ring" style={containerSize}>
    <div style={{ width, height }}></div>
    <div style={{ width, height }}></div>
    <div style={{ width, height }}></div>
    <div style={{ width, height }}></div>
  </div>
);
