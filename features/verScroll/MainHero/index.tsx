"use client";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import { m, useScroll, useTransform } from "framer-motion";
import Model3DSpin from "../Model3D";
import { HEIGHT_HEADER, PADDING_LAYOUT } from "@/config/layout";
import {
  MARGIN_TOP_TEXT_RIGHT,
  MAX_FONT,
  MAX_HEIGHT_SVG,
  MAX_WIDTH_BOX,
  MAX_WIDTH_TEXT_RIGHT_TOP,
  MIN_FONT,
  MIN_HEIGHT_SVG,
  MIN_WIDTH_BOX,
  MIN_WIDTH_TEXT_RIGHT_TOP,
  TOTAL_HEIGHT_TEXT
} from "@/constant/mainhero";
import { HEIGHT_ONE_FRAME_SCROLL, TRANSITION_FADE_IN, VARIANTS_FADE_IN } from "@/config/animations";
import { WIDTH_AVATAR } from "@/constant/about";
import { convertTextToNumber } from "@/shared/utils/function";
import useGetMotionValue from "@/shared/hooks/useGetMotionValue";

const MainHero = () => {
  const { scrollY } = useScroll();
  const { width, height } = useWindowSizeCtx();

  const widthScreen = (width >= 1440 ? 1440 : width) - PADDING_LAYOUT;

  const haftHeightScreen = height / 2 - HEIGHT_HEADER;
  const haftWidthScreen = widthScreen / 2;

  const inputRange = [0, HEIGHT_ONE_FRAME_SCROLL];
  const inputRangeXAxisTF = [HEIGHT_ONE_FRAME_SCROLL, 2 * HEIGHT_ONE_FRAME_SCROLL];

  const sizeBoxMiddle = useTransform(scrollY, inputRange, [MAX_WIDTH_BOX, MIN_WIDTH_BOX]);
  const sizeText = useTransform(scrollY, inputRange, [MIN_FONT, MAX_FONT]);

  const valueMotionText = convertTextToNumber(useGetMotionValue(sizeText, MIN_FONT));
  const valueSizeBoxTF = useGetMotionValue(sizeBoxMiddle, MAX_WIDTH_BOX);

  const yMiddleInput = haftHeightScreen - valueSizeBoxTF / 2;
  const yMiddle = useTransform(scrollY, inputRange, [
    yMiddleInput,
    yMiddleInput - MARGIN_TOP_TEXT_RIGHT - valueMotionText + inputRange[1]
  ]);
  const xMiddle = useTransform(scrollY, inputRange, [
    haftWidthScreen - MAX_WIDTH_BOX / 2,
    widthScreen - MIN_WIDTH_BOX
  ]);

  const yTextInput = haftHeightScreen - valueMotionText;
  const yTextLeft = useTransform(scrollY, inputRange, [
    yTextInput,
    inputRange[1] + yTextInput - TOTAL_HEIGHT_TEXT
  ]);
  const yTextRightTop = useTransform(scrollY, inputRange, [
    yTextInput,
    inputRange[1] + yTextInput + MARGIN_TOP_TEXT_RIGHT
  ]);
  const xTextRightTop = useTransform(scrollY, inputRange, [
    0,
    -widthScreen + MAX_WIDTH_TEXT_RIGHT_TOP / 2 + WIDTH_AVATAR + PADDING_LAYOUT * 2
  ]);

  const yTextRightBottom = useTransform(scrollY, inputRange, [
    yTextInput + convertTextToNumber(MIN_FONT),
    yTextInput + convertTextToNumber(MAX_FONT) + MARGIN_TOP_TEXT_RIGHT + inputRange[1]
  ]);
  const xTextRightBottom = useTransform(scrollY, inputRange, [-MIN_WIDTH_TEXT_RIGHT_TOP, 0]);

  const maxHeightSvg = useTransform(scrollY, inputRange, [MIN_HEIGHT_SVG, MAX_HEIGHT_SVG]);
  const maxWidthText = useTransform(scrollY, inputRange, ["500px", "832px"]);

  const xMainHero = useTransform(scrollY, inputRangeXAxisTF, [0, widthScreen + PADDING_LAYOUT]);
  const yMainHero = useTransform(scrollY, inputRangeXAxisTF, [0, inputRangeXAxisTF[0]]);

  return (
    <m.div
      variants={VARIANTS_FADE_IN}
      initial="hidden"
      animate="show"
      transition={TRANSITION_FADE_IN}
      style={{ x: xMainHero, y: yMainHero, height: inputRangeXAxisTF[1] }}
      className="relative w-full">
      <m.h3
        className="relative z-[2] flex flex-wrap items-center font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextLeft, fontSize: sizeText, maxWidth: maxWidthText }}>
        hello
        <m.svg
          fill="none"
          className="mb-[3px] ml-3 h-full max-h-[30px] w-auto"
          style={{ maxHeight: maxHeightSvg }}
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
        className="absolute right-0 top-0 z-[2] font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextRightTop, x: xTextRightTop, fontSize: sizeText }}>
        Huyne®
      </m.h3>
      <m.h3
        className="absolute right-0 top-0 z-[2] font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextRightBottom, x: xTextRightBottom, fontSize: sizeText }}>
        nguyen quang huy
      </m.h3>
    </m.div>
  );
};

export default MainHero;
