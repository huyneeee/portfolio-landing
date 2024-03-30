"use client";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import { m, useScroll, useTransform } from "framer-motion";
import Model3DSpin from "../Model3D";

const MAX_WIDTH_BOX = 500;
const MIN_WIDTH_BOX = 400;

const MIN_FONT = "40px";
const MAX_FONT = "100px";

const MIN_HEIGHT_SVG = "30px";
const MAX_HEIGHT_SVG = "86px";

const PADDING_LAYOUT = 80; // include 2 border;
const HEIGHT_HEADER = 90;
const MIN_WIDTH_TEXT_RIGHT_TOP = 155;
const MAX_WIDTH_TEXT_RIGHT_TOP = 405;

const MARGIN_TOP_TEXT_RIGHT = 30;

const convertTextToNumber = (fontSize: string) => {
  return +fontSize.replace("px", "");
};

const MainHero = () => {
  const { scrollY } = useScroll();
  const { width, height } = useWindowSizeCtx();

  const widthScreen = width - PADDING_LAYOUT;
  const heightScreen = height - HEIGHT_HEADER;

  const haftHeightScreen = heightScreen / 2;
  const haftWidthScreen = widthScreen / 2;

  const inputRange = [0, heightScreen];

  const sizeBoxMiddle = useTransform(scrollY, inputRange, [MAX_WIDTH_BOX, MIN_WIDTH_BOX]);
  const sizeText = useTransform(scrollY, inputRange, [MIN_FONT, MAX_FONT]);

  const valueMotionText = convertTextToNumber(sizeText.get());
  const valueMotionBoxMiddle = sizeBoxMiddle.get();

  const yMiddleInput = haftHeightScreen - sizeBoxMiddle.get() / 2;
  const yMiddle = useTransform(scrollY, inputRange, [
    yMiddleInput,
    yMiddleInput + haftHeightScreen + MIN_WIDTH_BOX / 2 + MARGIN_TOP_TEXT_RIGHT
  ]);
  const xMiddle = useTransform(scrollY, inputRange, [
    haftWidthScreen - MAX_WIDTH_BOX / 2,
    widthScreen - MIN_WIDTH_BOX
  ]);

  const yTextInput = haftHeightScreen - valueMotionText;
  const yTextLeft = useTransform(scrollY, inputRange, [
    yTextInput,
    heightScreen + yTextInput - valueMotionBoxMiddle / 2
  ]);
  const yTextRightTop = useTransform(scrollY, inputRange, [
    yTextInput,
    heightScreen + yTextInput - MARGIN_TOP_TEXT_RIGHT
  ]);
  const xTextRightTop = useTransform(scrollY, inputRange, [
    0,
    -widthScreen + MAX_WIDTH_TEXT_RIGHT_TOP + MIN_WIDTH_TEXT_RIGHT_TOP
  ]);
  const yTextRightBottom = useTransform(scrollY, inputRange, [
    yTextInput + valueMotionText,
    heightScreen + yTextInput + convertTextToNumber(MAX_FONT) - MARGIN_TOP_TEXT_RIGHT
  ]);
  const xTextRightBottom = useTransform(scrollY, inputRange, [-MIN_WIDTH_TEXT_RIGHT_TOP, 0]);

  const maxHeightSvg = useTransform(scrollY, inputRange, [MIN_HEIGHT_SVG, MAX_HEIGHT_SVG]);
  const maxWidthText = useTransform(scrollY, inputRange, ["500px", "832px"]);

  return (
    <div className="relative h-[250vh] w-full">
      <m.h3
        className="relative z-[2] flex flex-wrap items-center font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextLeft, fontSize: sizeText, maxWidth: maxWidthText }}
      >
        hello
        <m.svg
          fill="none"
          className="mb-[3px] ml-3 h-full max-h-[30px] w-auto"
          style={{ maxHeight: maxHeightSvg }}
          viewBox="0 0 137 115"
        >
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
        className="logo_3d absolute left-0 top-0 z-0"
      >
        <Model3DSpin />
      </m.div>
      <m.h3
        className="absolute right-0 top-0 z-[2] font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextRightTop, x: xTextRightTop, fontSize: sizeText }}
      >
        Huyne®
      </m.h3>
      <m.h3
        className="absolute right-0 top-0 z-[2] font-medium uppercase leading-[1em] text-main-white"
        style={{ y: yTextRightBottom, x: xTextRightBottom, fontSize: sizeText }}
      >
        nguyen quang huy
      </m.h3>
    </div>
  );
};

export default MainHero;
