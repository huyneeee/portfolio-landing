"use client";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import { useScroll, useTransform, m } from "framer-motion";
import React from "react";
import Image from "next/image";
import {
  HEIGHT_AVATAR,
  WIDTH_AVATAR,
  HEIGHT_DESCRIPTION,
  HEIGHT_AVATAR_MAX,
  WIDTH_AVATAR_MAX
} from "@/constant/about";
import { HEIGHT_ONE_FRAME_SCROLL, HEIGHT_RANGE_SCROLL } from "@/config/animations";
import { HEIGHT_HEADER, PADDING_LAYOUT } from "@/config/layout";
import { MARGIN_TOP_TEXT_RIGHT, MAX_FONT } from "@/constant/mainhero";
import { convertTextToNumber } from "@/shared/utils/function";

const POINT_SHOW_TEXT_ABOUT = 0.8;

const ABOUT_ME = `I aim to leverage my experience and skills to contribute effectively to the development of
innovative and user-centric web applications.`;

const AboutMeTextLinear = () => {
  const { height } = useWindowSizeCtx();
  const { scrollY } = useScroll();

  const haftHeightScreen = height / 2 - HEIGHT_HEADER;

  const rangeHeightMainHero = [0, HEIGHT_ONE_FRAME_SCROLL];
  const endScrollState4 = HEIGHT_RANGE_SCROLL.state_4.to * HEIGHT_ONE_FRAME_SCROLL;
  const endScrollState3 = HEIGHT_RANGE_SCROLL.state_4.from * HEIGHT_ONE_FRAME_SCROLL;

  const xImageAvatar = useTransform(scrollY, rangeHeightMainHero, [
    -WIDTH_AVATAR - PADDING_LAYOUT,
    0
  ]);

  const opacityAvatar = useTransform(scrollY, rangeHeightMainHero, [0, 1]);

  const initialYAxisTextAbout = -(
    HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL -
    haftHeightScreen +
    HEIGHT_DESCRIPTION / 2
  );

  const yText = useTransform(
    scrollY,
    [0, endScrollState4],
    [initialYAxisTextAbout, initialYAxisTextAbout + endScrollState4]
  );

  const inputRangeShowText = [
    0,
    (HEIGHT_RANGE_SCROLL.state_2.from + POINT_SHOW_TEXT_ABOUT) * HEIGHT_ONE_FRAME_SCROLL,
    HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL
  ];

  const opacityText = useTransform(scrollY, inputRangeShowText, [0, 0, 0.3]);
  const xText = useTransform(scrollY, inputRangeShowText, [PADDING_LAYOUT, PADDING_LAYOUT, 0]);

  const heightAvatar = useTransform(
    scrollY,
    [inputRangeShowText[1], inputRangeShowText[2]],
    [HEIGHT_AVATAR, HEIGHT_AVATAR_MAX]
  );
  const widthAvatar = useTransform(
    scrollY,
    [inputRangeShowText[1], inputRangeShowText[2]],
    [WIDTH_AVATAR, WIDTH_AVATAR_MAX]
  );

  const maxHeightText = convertTextToNumber(MAX_FONT);

  const initialHeightAvatar = -(
    HEIGHT_RANGE_SCROLL.state_2.to * HEIGHT_ONE_FRAME_SCROLL -
    haftHeightScreen -
    maxHeightText +
    MARGIN_TOP_TEXT_RIGHT +
    HEIGHT_HEADER
  );

  const yImageAvatar = useTransform(
    scrollY,
    [0, inputRangeShowText[1], inputRangeShowText[2], endScrollState4],
    [
      initialHeightAvatar,
      initialHeightAvatar + inputRangeShowText[1],
      initialHeightAvatar + inputRangeShowText[2] - (height / 2 - heightAvatar.get() / 2),
      initialHeightAvatar + endScrollState4 - (height / 2 - heightAvatar.get() / 2)
    ]
  );

  return (
    <div
      className="relative w-full bg-gray-400"
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
        <Image
          src="/images/avatar.png"
          alt="avatar"
          fill
          className="h-[350px] w-[250px] object-cover"
        />
      </m.div>
      <m.div
        className="absolute right-0 top-0 z-10 max-w-[670px] text-balance text-[53px] font-medium leading-[53px] text-main-white"
        style={{ y: yText, x: xText, opacity: opacityText }}>
        {ABOUT_ME}
      </m.div>
    </div>
  );
};

export default AboutMeTextLinear;
