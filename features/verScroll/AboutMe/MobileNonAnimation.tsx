import Image from "next/image";
import React from "react";
import Avatar from "@/public/images/avatar.png";
import { ABOUT_ME_TEXT } from "@/constant/about";

const MobileNonAnimation = () => {
  return (
    <section className="about-me mb-20 h-full w-full">
      <div className="relative h-[350px] w-full overflow-hidden rounded-md bg-main-white">
        <Image src={Avatar} alt="avatar" fill className="object-cover" />
      </div>
      <h3 className="mt-8 text-[40px] leading-[40px] text-main-white">{ABOUT_ME_TEXT}</h3>
    </section>
  );
};

export default MobileNonAnimation;
