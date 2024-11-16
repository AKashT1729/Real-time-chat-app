import React from "react";
import Spline from "@splinetool/react-spline";

const Background = ({ children }) => {
  return (
    <div className="absolute w-full h-full z-0">
      {/* Spline 3D Background */}
      <Spline
        scene="https://prod.spline.design/V3SKz35h1h4bqPIn/scene.splinecode"
        className="w-full h-full"
      />

      {children}
    </div>
  );
};

export default Background;
