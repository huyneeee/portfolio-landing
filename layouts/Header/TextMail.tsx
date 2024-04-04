import React, { useState } from "react";
import { m } from "@/shared/components/atoms/framer-motion";

const variants = {
  hide: {
    width: "0%"
  },
  show: {
    width: "100%"
  }
};

const TextMail = () => {
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
      href="mailto:huynq.webdev@gmail.com"
      className="relative text-base text-main-lightgray">
      huynq.webdev@gmail.com
      <m.span
        variants={variants}
        initial="hide"
        animate={animate}
        transition={{
          duration: 0.3
        }}
        className="absolute bottom-[2px] left-0 h-[1px] bg-main-lightgray"></m.span>
    </m.a>
  );
};

export default TextMail;
