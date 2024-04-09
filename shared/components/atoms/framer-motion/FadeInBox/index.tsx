"use client";
import React, { PropsWithChildren, useRef } from "react";
import { m } from "..";
import { TRANSITION_FADE_IN, VARIANTS_FADE_IN } from "@/config/animations";
import { AnimationProps, useInView } from "framer-motion";

type IPropsFadeInBox = AnimationProps & {
  className?: string;
};

const FadeInBox = ({ children, ...props }: PropsWithChildren<IPropsFadeInBox>) => {
  const { variants, initial, animate, transition, ...others } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5
  });

  const animateAction = animate || "show";
  const initialAction = initial || "hidden";

  return (
    <m.div
      ref={ref}
      variants={variants || VARIANTS_FADE_IN}
      initial={initialAction}
      animate={isInView ? animateAction : initialAction}
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
