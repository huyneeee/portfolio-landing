/* eslint-disable react-hooks/rules-of-hooks */
import { HEIGHT_ONE_FRAME_SCROLL } from "@/config/animations";
import { HEIGHT_HEADER, PADDING_LAYOUT } from "@/config/layout";
import { WIDTH_AVATAR } from "@/constant/about";
import { MAX_FONT, MAX_WIDTH_BOX, MIN_FONT, MIN_WIDTH_BOX } from "@/constant/mainhero";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import useGetMotionValue from "@/shared/hooks/useGetMotionValue";
import { useScroll, useTransform } from "motion/react";

const inputRange = [0, HEIGHT_ONE_FRAME_SCROLL];
const inputRangeXAxisTF = [HEIGHT_ONE_FRAME_SCROLL, 2 * HEIGHT_ONE_FRAME_SCROLL];

export const MotionAnimation = ({
  heightTextTR,
  minTextLeft,
  maxTextLeft,
  widthTextTR
}: Record<string, number>) => {
  const { scrollY } = useScroll();
  const { width, height } = useWindowSizeCtx();
  const widthScreen = (width >= 1440 ? 1440 : width) - PADDING_LAYOUT;

  const haftHeightScreen = height / 2 - HEIGHT_HEADER;
  const haftWidthScreen = widthScreen / 2;
  const yTextInput = haftHeightScreen - heightTextTR;

  const inputRangeHaftProcess = [0, HEIGHT_ONE_FRAME_SCROLL / 2, HEIGHT_ONE_FRAME_SCROLL];
  const sizeText = useTransform(scrollY, inputRange, [MIN_FONT, MAX_FONT]);

  const motionBoxMiddle = () => {
    const sizeBoxMiddle = useTransform(scrollY, inputRange, [MAX_WIDTH_BOX, MIN_WIDTH_BOX]);

    const valueSizeBoxTF = useGetMotionValue(sizeBoxMiddle, MAX_WIDTH_BOX);

    const yMiddleInput = haftHeightScreen - valueSizeBoxTF / 2;

    const yMiddle = useTransform(scrollY, inputRange, [
      yMiddleInput,
      yMiddleInput - 2 * heightTextTR + inputRange[1]
    ]);
    const xMiddle = useTransform(scrollY, inputRange, [
      haftWidthScreen - MAX_WIDTH_BOX / 2,
      widthScreen - MIN_WIDTH_BOX
    ]);

    return {
      yMiddle,
      xMiddle,
      sizeBoxMiddle
    };
  };

  const motionTextLeft = () => {
    const yTextLeft = useTransform(scrollY, inputRangeHaftProcess, [
      yTextInput,
      yTextInput - 2 * heightTextTR + inputRangeHaftProcess[1],
      yTextInput - 2 * heightTextTR + inputRangeHaftProcess[2]
    ]);

    const maxWidthText = useTransform(scrollY, inputRange, [minTextLeft, maxTextLeft]);

    return {
      sizeText,
      yTextLeft,
      maxWidthText
    };
  };

  const motionTextRightTop = () => {
    const marginTextRow = heightTextTR / 10;

    const yTextRightTop = useTransform(scrollY, inputRangeHaftProcess, [
      yTextInput,
      yTextInput + inputRangeHaftProcess[1],
      yTextInput + marginTextRow + inputRangeHaftProcess[2]
    ]);
    const xTextRightTop = useTransform(scrollY, inputRange, [
      0,
      -(widthScreen - widthTextTR - PADDING_LAYOUT / 2 - WIDTH_AVATAR)
    ]);

    return {
      sizeText,
      yTextRightTop,
      xTextRightTop
    };
  };

  const motionTextRightBottom = () => {
    const marginTextRow = heightTextTR / 10;

    const yTextRightBottom = useTransform(scrollY, inputRangeHaftProcess, [
      yTextInput + heightTextTR,
      yTextInput + heightTextTR + inputRangeHaftProcess[1],
      yTextInput + heightTextTR + marginTextRow + inputRangeHaftProcess[2]
    ]);
    const xTextRightBottom = useTransform(scrollY, inputRange, [-widthTextTR / 2, 0]);

    return {
      sizeText,
      yTextRightBottom,
      xTextRightBottom
    };
  };

  const motionMainHero = () => {
    const xMainHero = useTransform(scrollY, inputRangeXAxisTF, [0, widthScreen + PADDING_LAYOUT]);
    const yMainHero = useTransform(scrollY, inputRangeXAxisTF, [0, inputRangeXAxisTF[0]]);
    return {
      heightMainHero: inputRangeXAxisTF[1],
      yMainHero,
      xMainHero
    };
  };

  return {
    motionBoxMiddle,
    motionTextLeft,
    motionTextRightTop,
    motionTextRightBottom,
    motionMainHero
  };
};
