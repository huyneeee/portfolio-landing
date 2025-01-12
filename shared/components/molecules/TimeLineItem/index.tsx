import React from "react";
import FadeInBox from "@/shared/components/atoms/framer-motion/FadeInBox";
import { AnimationProps } from "motion/react";

type IPropsTimeLineItem = {
  time: string;
  nameCompany: string;
  description: string;
  index: number;
};

const VARIANTS_FADE_IN: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    x: 50
  },
  show: {
    opacity: 1,
    x: 0
  }
};

const TimeLineItem = ({ time, nameCompany, description, index }: IPropsTimeLineItem) => {
  return (
    <div className="relative">
      <div className="bullet absolute left-[-26px] top-[5px] h-[10px] w-[10px] rounded-full bg-main-white" />
      <FadeInBox
        key={index}
        variants={VARIANTS_FADE_IN}
        transition={{
          duration: 0.5,
          delay: index * 0.5
        }}
      >
        <div className="timeline-item flex max-w-[450px] flex-col">
          <p className="text-sm text-main-lightgray">{time}</p>
          <p className="mb-1 text-2xl font-medium text-main-white">{nameCompany}</p>
          <p className="text-md text-balance text-main-white/80">{description}</p>
        </div>
      </FadeInBox>
    </div>
  );
};

export default TimeLineItem;
