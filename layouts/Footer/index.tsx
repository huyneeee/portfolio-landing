import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer fixed bottom-[10px] left-[15px] z-[9999] rounded-[20px] border border-main-lightgray bg-black pl-[30px] lg:left-[40px]">
      <div className="flex h-[60px] w-full items-center justify-between">
        <Link href="/" className="w-fit text-sm text-main-white">
          Personal portfolio © 2024
        </Link>
        <Link href="/about" className="w-fit text-sm text-main-white max-lg:hidden">
          About me
        </Link>
        <Link
          href="/others/cv.pdf"
          download={"cv_frontend_nguyenquanghuy.pdf"}
          className="mr-[5px] flex h-[50px] items-center justify-center rounded-[15px] border border-main-white bg-black px-[20px] text-sm text-main-white transition-all duration-300 ease-linear hover:bg-main-white hover:text-black"
        >
          Download CV
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
