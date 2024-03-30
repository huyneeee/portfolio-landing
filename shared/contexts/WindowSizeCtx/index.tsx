"use client";
import { useWindowSize } from "@/shared/hooks/useWindowSize";
import { PropsWithChildren, createContext, useContext } from "react";

type WindowSizeCtxType = {
  width: number;
  height: number;
};

const WindowSizeCtx = createContext<WindowSizeCtxType>({
  width: 0,
  height: 0
});

const WindowSizeCtxProvider = (props: PropsWithChildren) => {
  const windowSize = useWindowSize();
  return <WindowSizeCtx.Provider value={windowSize}>{props.children}</WindowSizeCtx.Provider>;
};

function useWindowSizeCtx() {
  const windowSize = useContext(WindowSizeCtx);

  if (typeof windowSize === "undefined") {
    throw new Error("useWindowSizeCtx must be used within a WindowSizeCtxProvider");
  }

  return windowSize;
}

export { WindowSizeCtxProvider, useWindowSizeCtx };
