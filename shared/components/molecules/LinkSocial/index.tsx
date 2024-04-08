import { IconArrowRotate } from "@/shared/assets/IconArrow";
import Link from "next/link";
import React, { PropsWithChildren } from "react";

type IPropsLinkSocial = {
  href: string;
};

const LinkSocial = ({ children, href }: PropsWithChildren<IPropsLinkSocial>) => {
  return (
    <Link href={href} target="_blank" className="flex items-center gap-1 text-base text-main-white">
      {children}
      <IconArrowRotate />
    </Link>
  );
};

export default LinkSocial;
