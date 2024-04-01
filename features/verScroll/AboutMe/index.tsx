"use client";
import { useWindowSizeCtx } from "@/shared/contexts/WindowSizeCtx";
import { useScroll, useTransform, m } from "framer-motion";
import React from "react";
import Image from "next/image";
import { HEIGHT_AVATAR, WIDTH_AVATAR, HEIGHT_DESCRIPTION } from "@/constant/about";
import { HEIGHT_RANGE_SCROLL } from "@/config/animations";
import { PADDING_LAYOUT } from "@/config/layout";
import { MARGIN_TOP_TEXT_RIGHT, MAX_FONT } from "@/constant/mainhero";
import { convertTextToNumber } from "@/shared/utils/function";

const AboutMeTextLinear = () => {
  const { height } = useWindowSizeCtx();
  const { scrollY } = useScroll();

  // const haftHeight = height / 2;
  const endScrollState3 = HEIGHT_RANGE_SCROLL.state_3.to * height;
  const endScrollState1 = HEIGHT_RANGE_SCROLL.state_1.to * height;

  const xImageAvatar = useTransform(
    scrollY,
    [0, endScrollState1],
    [-WIDTH_AVATAR - PADDING_LAYOUT, PADDING_LAYOUT / 2]
  );

  const opacityImage = useTransform(scrollY, [0, endScrollState1], [0, 1]);

  const yText = useTransform(
    scrollY,
    [0, endScrollState3],
    [-height - HEIGHT_DESCRIPTION * 2, -height - HEIGHT_DESCRIPTION * 2 + endScrollState3]
  );

  const inputRangeShowText = [
    0,
    (HEIGHT_RANGE_SCROLL.state_2.from + 0.2) * height,
    (HEIGHT_RANGE_SCROLL.state_2.to - 0.5) * height
  ];

  const opacityText = useTransform(scrollY, inputRangeShowText, [0, 0, 0.3]);

  const heightImage = useTransform(
    scrollY,
    [inputRangeShowText[1], inputRangeShowText[2]],
    [HEIGHT_AVATAR, height - PADDING_LAYOUT * 2]
  );

  // const valueIncreaseHeightImage = heightImage.get() - HEIGHT_AVATAR;
  const maxHeightText = convertTextToNumber(MAX_FONT);

  const initialHeightAvatar = -height - HEIGHT_AVATAR - maxHeightText * 2 + MARGIN_TOP_TEXT_RIGHT;

  const yImageAvatar = useTransform(
    scrollY,
    [0, endScrollState3],
    [initialHeightAvatar, initialHeightAvatar + endScrollState3]
  );

  return (
    <div className="relative h-screen w-full bg-gray-400">
      <m.div
        className="relative z-10 h-[350px] w-[250px]"
        style={{
          y: yImageAvatar,
          x: xImageAvatar,
          opacity: opacityImage,
          height: heightImage
          // height: HEIGHT_AVATAR,
          // width: WIDTH_AVATAR
        }}
      >
        <Image
          src="/images/avatar.png"
          alt="avatar"
          fill
          className="h-[350px] w-[250px] object-cover"
        />
      </m.div>
      <m.div
        className="absolute right-0 top-0 z-10 max-w-[670px] text-[53px] font-medium leading-[53px] text-main-white"
        style={{ y: yText, opacity: opacityText }}
      >
        I aim to leverage my experience and skills to contribute effectively to the development of
        innovative and user-centric web applications.
      </m.div>
    </div>
  );
};

export default AboutMeTextLinear;
