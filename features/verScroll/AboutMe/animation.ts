/* eslint-disable react-hooks/rules-of-hooks */
import { HEIGHT_ONE_FRAME_SCROLL, HEIGHT_RANGE_SCROLL } from "@/config/animations";
import { HEIGHT_HEADER, PADDING_LAYOUT } from "@/config/layout";
import {
  HEIGHT_AVATAR,
  HEIGHT_AVATAR_MAX,
  HEIGHT_AVATAR_MOBILE_MAX,
  HEIGHT_AVATAR_MOBILE_MIN,
  HEIGHT_DESCRIPTION,
  POINT_SHOW_TEXT_ABOUT,
  POINT_SHOW_TEXT_ABOUT_MOBILE,
  WIDTH_AVATAR,
  WIDTH_AVATAR_MAX
} from "@/constant/about";
import { MARGIN_TOP_TEXT_RIGHT } from "@/constant/mainhero";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import useGetMotionValue from "@/shared/hooks/useGetMotionValue";
import { useMotionValue, useScroll, useTransform } from "framer-motion";

const rangeHeightMainHero = [0, HEIGHT_ONE_FRAME_SCROLL];
const endStateScrollMobile = HEIGHT_ONE_FRAME_SCROLL * 1.6;

export const MotionAnimation = () => {
  const { height } = useWindowSizeCtx();
  const { scrollY } = useScroll();

  const haftHeightScreen = height / 2 - HEIGHT_HEADER;
  const inputRangeShowText = [
    0,
    (HEIGHT_RANGE_SCROLL.state_2.from + POINT_SHOW_TEXT_ABOUT) * HEIGHT_ONE_FRAME_SCROLL,
    HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL
  ];
  const endScrollDesktop = inputRangeShowText[2] + HEIGHT_ONE_FRAME_SCROLL;

  const motionAvatarDesktop = () => {
    const heightAvatar = useTransform(
      scrollY,
      [inputRangeShowText[1], inputRangeShowText[2]],
      [HEIGHT_AVATAR, HEIGHT_AVATAR_MAX]
    );
    const heightAvatarMV = useGetMotionValue(heightAvatar, HEIGHT_AVATAR);
    const widthAvatar = useTransform(
      scrollY,
      [inputRangeShowText[1], inputRangeShowText[2]],
      [WIDTH_AVATAR, WIDTH_AVATAR_MAX]
    );
    const initialHeightAvatar = -(
      HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL -
      haftHeightScreen +
      heightAvatarMV / 2
    );

    const bonusHeightScrollYState1 = MARGIN_TOP_TEXT_RIGHT * 2;

    const yImageAvatar = useTransform(
      scrollY,
      [0, inputRangeShowText[1], inputRangeShowText[2], endScrollDesktop],
      [
        initialHeightAvatar + bonusHeightScrollYState1,
        initialHeightAvatar + bonusHeightScrollYState1 + inputRangeShowText[1],
        initialHeightAvatar + inputRangeShowText[2],
        initialHeightAvatar + endScrollDesktop
      ]
    );

    const xImageAvatar = useTransform(scrollY, rangeHeightMainHero, [
      -WIDTH_AVATAR - PADDING_LAYOUT,
      0
    ]);

    const opacityAvatar = useTransform(scrollY, rangeHeightMainHero, [0, 1]);

    return {
      yImageAvatar,
      xImageAvatar,
      widthAvatar,
      heightAvatar,
      opacityAvatar,
      heightScroll: endScrollDesktop - inputRangeShowText[1] + haftHeightScreen
    };
  };

  const motionTextDesktop = () => {
    const initialYAxisTextAbout = -(
      HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL -
      haftHeightScreen +
      HEIGHT_DESCRIPTION / 2
    );
    const xText = useTransform(scrollY, inputRangeShowText, [PADDING_LAYOUT, PADDING_LAYOUT, 0]);
    const yText = useTransform(
      scrollY,
      [0, endScrollDesktop],
      [initialYAxisTextAbout, initialYAxisTextAbout + endScrollDesktop]
    );

    return {
      xText,
      yText
    };
  };

  const motionAvatarMobile = () => {
    const fromHeightScrollState = height - HEIGHT_HEADER;

    const inputRangeAllAnimation = [
      fromHeightScrollState,
      fromHeightScrollState + HEIGHT_ONE_FRAME_SCROLL / 3,
      endStateScrollMobile
    ];

    const sizeAvatar = useTransform(
      scrollY,
      [inputRangeAllAnimation[0], inputRangeAllAnimation[1]],
      [HEIGHT_AVATAR_MOBILE_MAX, HEIGHT_AVATAR_MOBILE_MIN]
    );

    const yBoxAvatar = useTransform(scrollY, inputRangeAllAnimation, [
      0,
      inputRangeAllAnimation[1] - inputRangeAllAnimation[0],
      inputRangeAllAnimation[2] - inputRangeAllAnimation[0]
    ]);
    const inputRangeShowTextMB = [
      inputRangeAllAnimation[0],
      inputRangeAllAnimation[1] * POINT_SHOW_TEXT_ABOUT_MOBILE,
      inputRangeAllAnimation[1]
    ];

    return {
      sizeAvatar,
      yBoxAvatar,
      inputRangeShowTextMB,
      inputRangeAllAnimation,
      heightScroll: endStateScrollMobile - inputRangeAllAnimation[0] + fromHeightScrollState
    };
  };

  const motionTextMobile = () => {
    const xText = useMotionValue(0);

    return {
      xText
    };
  };

  return {
    motionAvatarDesktop,
    motionTextDesktop,
    motionAvatarMobile,
    motionTextMobile,
    inputRangeShowText
  };
};
