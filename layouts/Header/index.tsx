import React from "react";

const Header = () => {
  return (
    <header className="header flex items-center justify-between bg-black py-[33px]">
      <div className="header__logo">
        <p className="mb-0 text-base text-white">Nguyen Quang Huy ®</p>
      </div>

      <div className="header__time relative">
        <div className="absolute top-[-25px] w-max rounded-[30px] border border-main-gray px-[16px] py-[12px] text-base text-main-white">
          04:51 PM
        </div>
      </div>

      <div className="header__mail flex items-center gap-1">
        <p className="text-base text-main-white">say hi - </p>
        <p className="text-base text-main-lightgray"> huynq.webdev@gmail.com</p>
      </div>
    </header>
  );
};

export default Header;
