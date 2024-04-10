import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

const staggerMenuItems = (open: boolean) =>
  stagger(0.1, { startDelay: 0.15, ease: "easeInOut", from: open ? "first" : "last" });

const variantsMenu = {
  hidden: {
    height: 0,
    opacity: 0,
    padding: 0
  },
  show: {
    height: "60vh",
    opacity: 1,
    padding: "15px 0px"
  }
};

export default function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(".menu", isOpen ? variantsMenu.show : variantsMenu.hidden, {
      duration: 0.5,
      delay: isOpen ? 0 : 1.05
    });
    animate(
      ".menu__item",
      isOpen
        ? {
            opacity: 1,
            y: 0
          }
        : {
            opacity: 0,
            y: 50
          },
      {
        duration: 0.2,
        delay: staggerMenuItems(isOpen)
      }
    );
  }, [isOpen]);

  return scope;
}
