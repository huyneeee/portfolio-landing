import React, { PropsWithChildren } from "react";
import Header from "./Header";
// import CursorCustom from "@/shared/components/molecules/Cursor";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto max-w-[1440px] overflow-hidden bg-black px-[40px]">
      <Header />
      {children}
      {/* <CursorCustom /> */}
    </main>
  );
};

export default React.memo(MainLayout);
