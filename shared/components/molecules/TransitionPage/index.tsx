"use client";

import { m } from "@/shared/components/atoms/framer-motion";

const ItemRow = ({ index }: { index: number }) => {
  return (
    <m.div
      initial={{
        width: "0%"
      }}
      animate={{
        width: "100%",
        backgroundColor: "#fff",
        position: "relative",
        zIndex: 999999999
      }}
      transition={{
        repeatType: "reverse",
        repeat: 1,
        repeatDelay: 0.3,
        delay: index * 0.2,
        duration: 0.3,
        type: "spring",
        stiffness: 50,
        restDelta: 0.2
      }}
      className="flex h-1/5 w-full"
    ></m.div>
  );
};

const TransitionPage = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen flex-col">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <ItemRow index={index} key={index} />
        ))}
    </div>
  );
};

export default TransitionPage;
