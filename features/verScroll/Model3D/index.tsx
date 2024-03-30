"use client";
import Spline from "@splinetool/react-spline";
import React from "react";

const Model3DSpin = () => {
  return (
    <Spline
      scene="https://prod.spline.design/L6RSsVwum2iHkEWb/scene.splinecode"
      style={{
        width: "100%",
        height: "100%",
        position: "absolute"
      }}
    />
  );
};

export default Model3DSpin;
