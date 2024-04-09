import Image from "next/image";
import React from "react";
import Avatar from "@/public/images/avatar.png";
import { ABOUT_ME_TEXT } from "@/constant/about";
import FadeInBox from "@/shared/components/atoms/framer-motion/FadeInBox";

const variants = {
  hidden: {
    opacity: 0,
    y: 100
  },
  show: {
    opacity: 1,
    y: 0
  }
};

const MobileNonAnimation = () => {
  return (
    <section className="about-me mb-20 h-full w-full">
      <FadeInBox variants={variants}>
        <div className="relative h-[350px] w-full overflow-hidden rounded-md bg-main-white">
          <Image src={Avatar} alt="avatar" fill className="object-cover" />
        </div>
      </FadeInBox>
      <FadeInBox variants={variants}>
        <h3 className="mt-8 text-[40px] leading-[40px] text-main-white">{ABOUT_ME_TEXT}</h3>
      </FadeInBox>
    </section>
  );
};

export default MobileNonAnimation;
