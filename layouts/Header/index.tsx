import React from "react";
import Time from "./Time";
import TextUnderlineHoverEffect from "@/shared/components/atoms/framer-motion/HoverTextUnderline";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header flex items-center justify-between py-[33px]">
      <div className="header__logo max-lg:hidden">
        <Link href="/" className="mb-0 text-base text-white">
          Nguyen Quang Huy ®
        </Link>
      </div>

      <div className="header__time relative max-lg:flex max-lg:w-full max-lg:justify-center">
        <Time />
      </div>

      <div className="header__mail flex items-center gap-1 max-lg:hidden">
        <p className="text-base text-main-white">say hi - </p>
        <TextUnderlineHoverEffect href="mailto:huynq.webdev@gmail.com">
          huynq.webdev@gmail.com
        </TextUnderlineHoverEffect>
      </div>
    </header>
  );
};

export default Header;
