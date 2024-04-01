"use client";

import MainLayout from "@/layouts/MainLayout";
import { LazyMotionContainer } from "@/shared/container/LazyMotionContainer";
import { WindowSizeCtxProvider } from "@/shared/contexts/WindowSizeCtx";
import Lenis from "@studio-freight/lenis";
import { PropsWithChildren, useEffect } from "react";

export const Registry = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e: any) => {
      console.log("targetScroll", e.targetScroll);
    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <WindowSizeCtxProvider>
      <LazyMotionContainer>
        <MainLayout>{children}</MainLayout>
      </LazyMotionContainer>
    </WindowSizeCtxProvider>
  );
};
