"use client";
import Link from "next/link";
import React, { useState } from "react";
import Process from "./Process";
import Hamburger from "./Hamburger";
import MenuMobile from "./MenuMobile";
import TextWave from "@/shared/components/molecules/TextWave";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <footer className="footer fixed bottom-[10px] left-[15px] z-[9999] overflow-hidden rounded-[20px] border border-main-lightgray bg-black pl-[15px] lg:left-[40px] lg:pl-[30px]">
      <MenuMobile open={open} />
      <div className="relative z-[9999] flex h-[60px] w-full items-center justify-between">
        <Hamburger open={open} onToggle={handleToggle} />
        <Link
          href="/"
          className="w-fit text-sm font-medium text-main-white bg-blend-difference max-lg:hidden"
        >
          Personal portfolio © 2024
        </Link>
        <Link href="/about" className="w-fit text-sm font-medium text-main-white max-lg:hidden">
          <TextWave text="About me" />
        </Link>
        <a
          href="/others/cv.pdf"
          download={"cv_frontend_nguyenquanghuy.pdf"}
          className="mr-[5px] flex h-[50px] items-center justify-center rounded-[15px] border border-main-white bg-transparent px-[20px] text-sm font-medium text-main-white transition-all duration-300 ease-linear hover:bg-main-white hover:text-black"
        >
          Download CV
        </a>
      </div>
      <Process />
    </footer>
  );
};

export default Footer;
