import React from "react";
import Time from "./Time";
import TextMail from "./TextMail";

const Header = () => {
  return (
    <header className="header flex items-center justify-between py-[33px]">
      <div className="header__logo max-lg:hidden">
        <p className="mb-0 text-base text-white">Nguyen Quang Huy ®</p>
      </div>

      <div className="header__time relative max-lg:flex max-lg:w-full max-lg:justify-center">
        <Time />
      </div>

      <div className="header__mail flex items-center gap-1 max-lg:hidden">
        <p className="text-base text-main-white">say hi - </p>
        <TextMail />
      </div>
    </header>
  );
};

export default Header;
