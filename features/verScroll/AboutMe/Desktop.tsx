"use client";
import { m } from "@/shared/components/atoms/framer-motion";
import WordByWordAnimate from "@/shared/components/molecules/WordByWord";
import Image from "next/image";
import { MotionAnimation } from "./animation";

const ABOUT_ME = `I aim to leverage my experience and skills to contribute effectively to the development of innovative and user-centric web applications.`;

const Desktop = () => {
  const { motionAvatarDesktop, motionTextDesktop, inputRangeShowText } = MotionAnimation();
  const { widthAvatar, yImageAvatar, xImageAvatar, opacityAvatar, heightAvatar, heightScroll } =
    motionAvatarDesktop();
  const { xText, yText } = motionTextDesktop();

  return (
    <div
      className="relative w-full"
      style={{
        height: heightScroll
      }}
    >
      <m.div
        className="relative z-10 h-[350px] w-[250px] rounded-md bg-main-white"
        style={{
          y: yImageAvatar,
          x: xImageAvatar,
          opacity: opacityAvatar,
          height: heightAvatar,
          width: widthAvatar
        }}
      >
        <Image src="/images/avatar.png" alt="avatar" fill className="object-cover" />
      </m.div>

      <WordByWordAnimate
        yText={yText}
        xText={xText}
        text={ABOUT_ME}
        inputRangeShowText={inputRangeShowText}
        startScrollY={inputRangeShowText[2]}
      />
    </div>
  );
};

export default Desktop;
