"use client";
import { HEIGHT_ONE_FRAME_SCROLL, HEIGHT_RANGE_SCROLL } from "@/config/animations";
import { HEIGHT_HEADER, PADDING_LAYOUT } from "@/config/layout";
import {
  HEIGHT_AVATAR,
  HEIGHT_AVATAR_MAX,
  HEIGHT_DESCRIPTION,
  POINT_SHOW_TEXT_ABOUT,
  WIDTH_AVATAR,
  WIDTH_AVATAR_MAX
} from "@/constant/about";
import { MARGIN_TOP_TEXT_RIGHT, MAX_FONT } from "@/constant/mainhero";
import WordByWordAnimate from "@/shared/components/molecules/WordByWord";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import useGetMotionValue from "@/shared/hooks/useGetMotionValue";
import { convertTextToNumber } from "@/shared/utils/function";
import { m, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const ABOUT_ME = `I aim to leverage my experience and skills to contribute effectively to the development of innovative and user-centric web applications.`;

const AboutMeTextLinear = () => {
  const { height } = useWindowSizeCtx();
  const { scrollY } = useScroll();

  const haftHeightScreen = height / 2 - HEIGHT_HEADER;
  const rangeHeightMainHero = [0, HEIGHT_ONE_FRAME_SCROLL];
  const endScrollState4 = HEIGHT_RANGE_SCROLL.state_4.to * HEIGHT_ONE_FRAME_SCROLL;

  const initialYAxisTextAbout = -(
    HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL -
    haftHeightScreen +
    HEIGHT_DESCRIPTION / 2
  );

  // animate text about
  const inputRangeShowText = [
    0,
    (HEIGHT_RANGE_SCROLL.state_2.from + POINT_SHOW_TEXT_ABOUT) * HEIGHT_ONE_FRAME_SCROLL,
    HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL
  ];
  const xText = useTransform(scrollY, inputRangeShowText, [PADDING_LAYOUT, PADDING_LAYOUT, 0]);
  const yText = useTransform(
    scrollY,
    [0, endScrollState4],
    [initialYAxisTextAbout, initialYAxisTextAbout + endScrollState4]
  );

  // animate avatar
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
    [0, inputRangeShowText[1], inputRangeShowText[2], endScrollState4],
    [
      initialHeightAvatar + bonusHeightScrollYState1,
      initialHeightAvatar + bonusHeightScrollYState1 + inputRangeShowText[1],
      initialHeightAvatar + inputRangeShowText[2],
      initialHeightAvatar + endScrollState4
    ]
  );

  const xImageAvatar = useTransform(scrollY, rangeHeightMainHero, [
    -WIDTH_AVATAR - PADDING_LAYOUT,
    0
  ]);

  const opacityAvatar = useTransform(scrollY, rangeHeightMainHero, [0, 1]);

  return (
    <div
      className="relative w-full"
      style={{
        height: 2 * HEIGHT_ONE_FRAME_SCROLL
      }}>
      <m.div
        className="relative z-10 h-[350px] w-[250px]"
        style={{
          y: yImageAvatar,
          x: xImageAvatar,
          opacity: opacityAvatar,
          height: heightAvatar,
          width: widthAvatar
        }}>
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

export default AboutMeTextLinear;
