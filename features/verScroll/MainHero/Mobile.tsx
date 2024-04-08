import React from "react";
import Model3DSpin from "../Model3D";

const Mobile = () => {
  return (
    <div className="mt-[-66px] flex h-svh w-full flex-col justify-between py-[100px]">
      <div>
        <h3 className="text-main-hero flex h-fit max-w-[335px] items-center">
          hello
          <svg
            fill="none"
            className="mb-[3px] ml-3 h-full max-h-[0.7em] w-auto"
            viewBox="0 0 137 115"
          >
            <rect width="25" height="115" fill="#F9FDFE"></rect>
            <rect width="10" height="115" x="64" fill="#F9FDFE"></rect>
            <rect width="7" height="115" x="86" fill="#F9FDFE"></rect>
            <rect width="15" height="115" x="37" fill="#F9FDFE"></rect>
            <rect width="1" height="115" x="136" fill="#F9FDFE"></rect>
            <rect width="5" height="115" x="105" fill="#F9FDFE"></rect>
            <rect width="2" height="115" x="122" fill="#F9FDFE"></rect>
          </svg>
          <span className="ml-auto">i’m</span>
        </h3>
        <h3 className="text-main-hero mt-[-15px]">web-developer</h3>
      </div>
      <div className="relative mx-auto h-[350px] w-[350px]">
        <Model3DSpin />
      </div>

      <div className="flex flex-col">
        <h3 className="text-main-hero text-right">Huyne®</h3>
        <h3 className="text-main-hero mt-[-15px] text-right">nguyen quang huy</h3>
      </div>
    </div>
  );
};

export default Mobile;
