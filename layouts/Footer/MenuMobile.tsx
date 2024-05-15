"use client";
import TextUnderlineHoverEffect from "@/shared/components/atoms/framer-motion/HoverTextUnderline";
import LinkSocial from "@/shared/components/molecules/LinkSocial";
import useMenuAnimation from "./animation";
import { useRouter } from "next/navigation";

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

const TIME_CLOSE_MENU = 1200;

const MenuMobile = ({ open = false, onToggle }: { open: boolean; onToggle: VoidFunction }) => {
  const { scope } = useMenuAnimation(open);
  const Router = useRouter();

  const handleChangeRouter = (route: string) => {
    onToggle();
    setTimeout(() => {
      Router.push(route);
    }, TIME_CLOSE_MENU);
  };

  return (
    <div ref={scope} className="relative z-[9999] lg:hidden">
      <div className="menu">
        <p className="menu__item pt-4 text-sm font-medium text-main-white">Nguyen Quang Huy ©</p>
        <div className="menu__item mt-5 flex flex-col gap-2">
          <p
            onClick={() => handleChangeRouter("/")}
            className="text-4xl font-medium uppercase text-main-white"
          >
            Main
          </p>
          <p
            onClick={() => handleChangeRouter("/about")}
            className="text-4xl font-medium uppercase text-main-white"
          >
            About
          </p>
        </div>

        <div className="menu__item mt-20 flex items-center gap-1">
          <p className="text-base text-main-white">say hi - </p>
          <TextUnderlineHoverEffect href="mailto:huynq.webdev@gmail.com">
            huynq.webdev@gmail.com
          </TextUnderlineHoverEffect>
        </div>

        <div className="menu__item mt-16 grid grid-cols-3 grid-rows-2 gap-y-3">
          {SOCIALS.map((social, key) => (
            <LinkSocial href={social.href} key={key}>
              {social.label}
            </LinkSocial>
          ))}
        </div>
        <p className="menu__item mt-8 text-base text-main-white">Personal portfolio © 2024</p>
      </div>
    </div>
  );
};

export default MenuMobile;
