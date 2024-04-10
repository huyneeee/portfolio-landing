"use client";
import React from "react";
import { IconArrow } from "@/shared/assets/IconArrow";

const TEXT = " scroll down to see that sh!t ✦";

const TextCircle = () => {
  const arr = TEXT.split("");

  return (
    <div className="flex items-center justify-center text-main-white">
      <div className="relative h-[100px] w-[100px] animate-spin-slow rounded-full border border-main-white">
        {arr.map((character, key) => {
          const deg = (360 / arr.length) * key;
          return (
            <span
              key={key}
              className="character absolute left-[48px] top-[1px] text-xs uppercase text-main-white"
              style={{
                transform: `rotate(${deg}deg)`,
                transformOrigin: "bottom center",
                width: "2px",
                height: "48px"
              }}
            >
              {character}
            </span>
          );
        })}
      </div>
      <div className="absolute w-fit animate-bounce text-main-white">
        <IconArrow className="rotate-90" />
      </div>
    </div>
  );
};

export default TextCircle;
