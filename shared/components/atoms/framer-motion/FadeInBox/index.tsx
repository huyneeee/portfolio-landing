"use client";
import React, { PropsWithChildren } from "react";
import { m } from "..";
import { TRANSITION_FADE_IN, VARIANTS_FADE_IN } from "@/config/animations";
import { AnimationProps } from "framer-motion";

type IPropsFadeInBox = AnimationProps & {
  className?: string;
};

const FadeInBox = ({ children, ...props }: PropsWithChildren<IPropsFadeInBox>) => {
  const { variants, initial, animate, transition, ...others } = props;

  return (
    <m.div
      variants={variants || VARIANTS_FADE_IN}
      initial={initial || "hidden"}
      animate={animate || "show"}
      transition={{
        ...TRANSITION_FADE_IN,
        ...transition
      }}
      {...others}
    >
      {children}
    </m.div>
  );
};

export default FadeInBox;
