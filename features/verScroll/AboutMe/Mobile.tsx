import React from "react";
import Image from "next/image";
import { m } from "@/shared/components/atoms/framer-motion";
import { MotionAnimation } from "./animation";
import WordByWordAnimate from "@/shared/components/molecules/WordByWord";
import Avatar from "@/public/images/avatar.png";

const ABOUT_ME = `I aim to leverage my experience and skills to contribute effectively to the development of innovative and user-centric web applications.`;

const Mobile = () => {
  const { motionAvatarMobile, motionTextMobile } = MotionAnimation();
  const { sizeAvatar, inputRangeShowTextMB, yBoxAvatar, inputRangeAllAnimation, heightScroll } =
    motionAvatarMobile();
  const { xText } = motionTextMobile();

  return (
    <div
      className="relative w-full"
      style={{
        height: heightScroll
      }}
    >
      <m.div
        className="flex w-full items-start justify-center bg-main-darkgray "
        style={{
          y: yBoxAvatar
        }}
      >
        <m.div
          className="relative z-10 mx-auto w-full rounded-md bg-main-white"
          style={{
            height: sizeAvatar
          }}
        >
          <Image src={Avatar} alt="avatar" fill className="object-cover" />
        </m.div>
      </m.div>
      <div className="relative mt-[20px]">
        <WordByWordAnimate
          yText={yBoxAvatar}
          xText={xText}
          text={ABOUT_ME}
          inputRangeShowText={inputRangeShowTextMB}
          startScrollY={inputRangeShowTextMB[2]}
          distanceScroll={inputRangeAllAnimation[2] - inputRangeAllAnimation[1]}
        />
      </div>
    </div>
  );
};

export default Mobile;
