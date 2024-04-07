"use client";
import React, { PropsWithChildren, useState } from "react";
import { m } from "@/shared/components/atoms/framer-motion";

const variants = {
  hide: {
    width: "0%"
  },
  show: {
    width: "100%"
  }
};

type IPropsTextUnderlineHoverEffect = {
  href?: string;
  className?: string;
};

const TextUnderlineHoverEffect = ({
  children,
  href,
  className
}: PropsWithChildren<IPropsTextUnderlineHoverEffect>) => {
  const [hover, setHover] = useState(false);

  const animate = hover ? "show" : "hide";
  const handleHover = () => {
    setHover(true);
  };
  const handleEndHover = () => {
    setHover(false);
  };

  return (
    <m.a
      onHoverStart={handleHover}
      onHoverEnd={handleEndHover}
      href={href}
      className={"relative text-base text-main-lightgray" + " " + className}
    >
      {children}
      <m.span
        variants={variants}
        initial="hide"
        animate={animate}
        transition={{
          duration: 0.3
        }}
        className="absolute bottom-[2px] left-0 h-[1px] bg-current "
      ></m.span>
    </m.a>
  );
};

export default TextUnderlineHoverEffect;
