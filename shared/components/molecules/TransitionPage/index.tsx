"use client";

import { m } from "../../atoms/framer-motion";

const ItemRow = ({ index }: { index: number }) => {
  return (
    <m.div
      initial={{}}
      animate={{
        width: "100%",
        backgroundColor: "#ff5555",
        position: "relative",
        zIndex: "10000",
        transition: {
          delay: index * 0.2,
          duration: 0.3,
          type: "spring",
          stiffness: 50,
          restDelta: 0.2
        }
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
