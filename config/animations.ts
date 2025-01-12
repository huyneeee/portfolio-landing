import { AnimationProps } from "motion/react";

const HEIGHT_RANGE_SCROLL = {
  state_1: {
    from: 0,
    to: 1
  },
  state_2: {
    from: 1,
    to: 2
  },
  state_3: {
    from: 2,
    to: 3
  },
  state_4: {
    from: 3,
    to: 4
  }
};

const HEIGHT_ONE_FRAME_SCROLL = 1500; // 1500px height div for scroll;

const VARIANTS_FADE_IN: AnimationProps["variants"] = {
  hidden: {
    opacity: 0,
    y: 30
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const TRANSITION_FADE_IN: AnimationProps["transition"] = {
  duration: 0.2,
  ease: "linear"
};

export { HEIGHT_RANGE_SCROLL, VARIANTS_FADE_IN, TRANSITION_FADE_IN, HEIGHT_ONE_FRAME_SCROLL };
