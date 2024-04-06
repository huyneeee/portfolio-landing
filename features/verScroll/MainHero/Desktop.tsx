"use client";
import { TRANSITION_FADE_IN, VARIANTS_FADE_IN } from "@/config/animations";
import { MAX_FONT, MIN_FONT } from "@/constant/mainhero";
import { m } from "@/shared/components/atoms/framer-motion";
import { useRef } from "react";
import Model3DSpin from "../Model3D";
import { MotionAnimation } from "./animation";

const Desktop = () => {
  const refTextTR = useRef<HTMLHeadingElement>(null);
  const refMinTextLeft = useRef<HTMLHeadingElement>(null);
  const refMaxTextLeft = useRef<HTMLHeadingElement>(null);

  const heightTextTR = refTextTR.current?.offsetHeight || 40;
  const widthTextTR = refTextTR.current?.offsetWidth || 0;
  const minTextLeft = refMinTextLeft.current?.offsetWidth || 333;
  const maxTextLeft = refMaxTextLeft.current?.offsetWidth || 0;

  const {
    motionBoxMiddle,
    motionMainHero,
    motionTextLeft,
    motionTextRightBottom,
    motionTextRightTop
  } = MotionAnimation({
    heightTextTR,
    widthTextTR,
    minTextLeft,
    maxTextLeft
  });

  const { sizeBoxMiddle, yMiddle, xMiddle } = motionBoxMiddle();
  const { yMainHero, xMainHero, heightMainHero } = motionMainHero();
  const { yTextLeft, sizeText, maxWidthText } = motionTextLeft();
  const { yTextRightBottom, xTextRightBottom } = motionTextRightBottom();
  const { yTextRightTop, xTextRightTop } = motionTextRightTop();

  return (
    <m.div
      variants={VARIANTS_FADE_IN}
      initial="hidden"
      animate="show"
      transition={TRANSITION_FADE_IN}
      style={{ x: xMainHero, y: yMainHero, height: heightMainHero }}
      className="text-main-hero relative w-full">
      <m.h3
        className="relative z-[2] flex flex-wrap items-center font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextLeft, fontSize: sizeText, maxWidth: maxWidthText }}>
        hello
        <m.svg
          fill="none"
          className="mb-[3px] ml-3 h-full max-h-[0.7em] w-auto"
          viewBox="0 0 137 115">
          <rect width="25" height="115" fill="#F9FDFE"></rect>
          <rect width="10" height="115" x="64" fill="#F9FDFE"></rect>
          <rect width="7" height="115" x="86" fill="#F9FDFE"></rect>
          <rect width="15" height="115" x="37" fill="#F9FDFE"></rect>
          <rect width="1" height="115" x="136" fill="#F9FDFE"></rect>
          <rect width="5" height="115" x="105" fill="#F9FDFE"></rect>
          <rect width="2" height="115" x="122" fill="#F9FDFE"></rect>
        </m.svg>
        <span className="ml-auto"> i’m </span>
        <span className="w-full text-center uppercase">web-developer</span>
      </m.h3>
      <m.div
        style={{
          y: yMiddle,
          x: xMiddle,
          width: sizeBoxMiddle,
          height: sizeBoxMiddle
        }}
        className="logo_3d absolute left-0 top-0 z-0">
        <Model3DSpin />
      </m.div>
      <m.h3
        ref={refTextTR}
        className="absolute right-0 top-0 z-[2] font-medium uppercase leading-[1em] text-main-white"
        id="huyne"
        style={{ y: yTextRightTop, x: xTextRightTop, fontSize: sizeText }}>
        Huyne®
      </m.h3>
      <m.h3
        className="absolute right-0 top-0 z-[2] font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextRightBottom, x: xTextRightBottom, fontSize: sizeText }}>
        nguyen quang huy
      </m.h3>

      {/* element used to caculate width  */}
      <h3
        ref={refMinTextLeft}
        className="w-fit min-w-max opacity-0"
        style={{
          fontSize: MIN_FONT
        }}>
        hello i'm web-developer hh
      </h3>
      <h3
        ref={refMaxTextLeft}
        className="w-fit min-w-max uppercase opacity-0"
        style={{
          fontSize: MAX_FONT
        }}>
        i web-developer
      </h3>
    </m.div>
  );
};

export default Desktop;
