"use client";
import React, { useMemo } from "react";
import Desktop from "./Desktop";
import { useResponsive } from "@/shared/hooks/useResponsive";
import { breakpoints } from "@/config/theme";
import Mobile from "./Mobile";

const MainHero = () => {
  const isDesktop = useResponsive({
    query: {
      width: breakpoints.lg,
      direction: "up"
    }
  });

  const content = useMemo(() => {
    if (isDesktop) return <Desktop />;
    return <Mobile />;
  }, [isDesktop]);

  return content;
};

export default MainHero;
