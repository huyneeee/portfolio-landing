import React, { PropsWithChildren } from "react";
import Header from "./Header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="mx-auto max-w-[1440px] bg-black px-[40px]">
      <Header />
      {children}
    </main>
  );
};

export default React.memo(MainLayout);
