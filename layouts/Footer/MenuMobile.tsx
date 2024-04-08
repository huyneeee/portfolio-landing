"use client";
import { m } from "@/shared/components/atoms/framer-motion";
import TextUnderlineHoverEffect from "@/shared/components/atoms/framer-motion/HoverTextUnderline";
import LinkSocial from "@/shared/components/molecules/LinkSocial";
import Link from "next/link";
import React from "react";

const variants = {
  hidden: {
    height: 0,
    opacity: 0,
    padding: 0
  },
  show: {
    height: "60vh",
    opacity: 1,
    padding: "15px 0px"
  }
};

const SOCIALS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/huy.neeee"
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/huy_neeee"
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nguyen-quang-huy-dev"
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/channel/UCTqNTgIFwV8nzQxJzvF5qxA"
  },
  {
    label: "Pinterest",
    href: "https://www.pinterest.com/nqhoneofakind/"
  }
];

const MenuMobile = ({ open = false }) => {
  const animate = open ? "show" : "hidden";

  return (
    <m.div
      variants={variants}
      animate={animate}
      transition={{
        duration: 0.3,
        ease: "easeInOut"
      }}
      className="relative z-[9999]"
    >
      <p className="text-sm font-medium text-main-white">Nguyen Quang Huy ©</p>
      <div className="mt-5 flex flex-col gap-2">
        <Link href={"/"} className="text-4xl font-medium uppercase text-main-white">
          Main
        </Link>
        <Link href={"/about"} className="text-4xl font-medium uppercase text-main-white">
          About
        </Link>
      </div>

      <div className="mt-20 flex items-center gap-1">
        <p className="text-base text-main-white">say hi - </p>
        <TextUnderlineHoverEffect href="mailto:huynq.webdev@gmail.com">
          huynq.webdev@gmail.com
        </TextUnderlineHoverEffect>
      </div>

      <div className="mt-16 grid grid-cols-3 grid-rows-2 gap-y-3">
        {SOCIALS.map((social, key) => (
          <LinkSocial href={social.href} key={key}>
            {social.label}
          </LinkSocial>
        ))}
      </div>
      <p className="mt-8 text-base text-main-white">Personal portfolio © 2024</p>
    </m.div>
  );
};

export default MenuMobile;
