"use client";
import { m } from "@/shared/components/atoms/framer-motion";

const variants = {
  path1: {
    default: {
      rotate: 0,
      x: 0,
      y: 0
    },
    animate: {
      rotate: 45,
      x: 1,
      y: 9
    }
  },
  path2: {
    default: {
      rotate: 0,
      x: 0,
      y: 0
    },
    animate: {
      rotate: -45,
      x: -0,
      y: -6
    }
  },
  path3: {
    default: {
      opacity: 1
    },
    animate: {
      opacity: 0
    }
  }
};

const Hamburger = ({ open = false, onToggle }: { open: boolean; onToggle: VoidFunction }) => {
  const animate = open ? "animate" : "default";

  return (
    <div onClick={onToggle} className="flex items-center gap-1 lg:hidden">
      <svg width="25" height="25" fill="none" viewBox="0 0 25 24">
        <m.path
          variants={variants.path1}
          stroke="#D6D8DA"
          stroke-linecap="round"
          animate={animate}
          d="M1 4h22"
        ></m.path>
        <m.path
          variants={variants.path2}
          animate={animate}
          stroke="#D6D8DA"
          stroke-linecap="round"
          d="M1 19h22"
        ></m.path>
        <m.rect
          animate={animate}
          variants={variants.path3}
          width="22"
          height="7"
          x="1"
          y="8"
          stroke="#D6D8DA"
          rx="3.5"
        ></m.rect>
      </svg>
      <p className="text-base font-medium text-main-white">Menu</p>
    </div>
  );
};

export default Hamburger;
