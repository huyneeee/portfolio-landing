import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto max-w-[1440px] overflow-hidden bg-black px-[15px] lg:px-[40px]">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default React.memo(MainLayout);
