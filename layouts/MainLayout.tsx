import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import CursorCustom from "@/shared/components/molecules/Cursor";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto max-w-[1440px] overflow-hidden bg-black px-[15px] lg:px-[40px]">
      <Header />
      {children}
      <Footer />
      {/* <CursorCustom /> */}
    </main>
  );
};

export default React.memo(MainLayout);
