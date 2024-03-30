import { LazyMotion } from "framer-motion";
import { PropsWithChildren } from "react";

// Make sure to return the specific export containing the feature bundle.
const loadFeatures = () => import("../../lib/features.js").then((res) => res.default);

// This animation will run when loadFeatures resolves.
export function LazyMotionContainer(props: PropsWithChildren) {
  return (
    <LazyMotion features={loadFeatures} strict>
      {props.children}
    </LazyMotion>
  );
}
