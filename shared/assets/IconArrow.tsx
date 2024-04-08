import React from "react";

export const IconArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m21 12l-5-5m5 5l-5 5m5-5H3"
      />
    </svg>
  );
};

export const IconArrowRotate = () => (
  <svg width="13" height="13" fill="currentColor">
    <path
      d="M.354 0h12v12h-1V1.707L.707 12.354 0 11.646 10.646 1H.354V0Z"
      clipRule="evenodd"
    ></path>
  </svg>
);
