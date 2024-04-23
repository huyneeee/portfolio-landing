"use client";
import clsx from "clsx";
import { stagger, useAnimate } from "framer-motion";
import React, { PropsWithChildren, useEffect, useState } from "react";

const staggerCharacter = stagger(0.05, {});

const variantsCharacter = (hover: boolean) => {
  if (hover)
    return {
      y: "-100%"
    };

  return {
    y: 0
  };
};

type IPropsTextWave = {
  text: string;
  className?: string;
};

const Character = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  if (children === " ") return " ";
  return (
    <span
      data-letter={children}
      className={clsx(
        "character relative inline-block text-main-white after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]",
        className
      )}
    >
      {children}
    </span>
  );
};

const TextWave = ({ text }: IPropsTextWave) => {
  const [hover, setHover] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".character", variantsCharacter(hover), {
      duration: 0.2,
      delay: staggerCharacter
    });
  }, [hover, animate]);

  const handleHover = (status: boolean) => {
    setHover(status);
  };

  return (
    <div
      ref={scope}
      className="cursor-pointer overflow-hidden"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-hidden
    >
      {text.split("").map((character, key) => (
        <Character key={key}>{character}</Character>
      ))}
    </div>
  );
};

export default TextWave;
