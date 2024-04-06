"use client";
import { breakpoints } from "@/config/theme";
import { useWindowSizeCtx } from "../contexts/WindowSizeCtx";

type Props = {
  between?: {
    minWidth: number;
    maxWidth: number;
  };
  query?: {
    direction: "up" | "down";
    width: number;
  };
};

export function useResponsive(props?: Props) {
  const { width } = useWindowSizeCtx();

  if (!!props?.between) {
    const { minWidth, maxWidth } = props.between;
    return width >= minWidth && width < maxWidth;
  }

  if (!!props?.query) {
    const { direction, width: cpWidth } = props.query;

    if (direction === "up") {
      return width >= cpWidth;
    }

    return width < cpWidth;
  }

  if (!width) return "desktop";

  if (width >= breakpoints["2xl"]) return "desktop";

  if (width < breakpoints["2xl"] && width >= breakpoints["sm"]) return "middle";

  return "mobile";
}
