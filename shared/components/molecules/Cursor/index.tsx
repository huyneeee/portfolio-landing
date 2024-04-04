"use client";
import { useFollowPointer } from "@/shared/hooks/useFollowPointer";
import { m } from "@/shared/components/atoms/framer-motion";
import React, { useRef } from "react";

const CursorCustom = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <m.div
      ref={ref}
      className="z-[9999999] h-[30px] w-[30px] rounded-full bg-main-white"
      animate={{ x, y }}
      transition={{
        type: "spring",
        damping: 10,
        stiffness: 50,
        restDelta: 0.001
      }}
    />
  );
};

export default CursorCustom;
