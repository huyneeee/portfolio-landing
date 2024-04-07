"use client";
import { IconArrow } from "@/shared/assets/IconArrow";
// import { useInView, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { m } from "../../atoms/framer-motion";
// import useGetMotionValue from "@/shared/hooks/useGetMotionValue";
// import { useEffect, useRef, useState } from "react";

type IPropsWork = {
  srcImage: string;
  label: string;
  link: string;
};

const Work = (props: IPropsWork) => {
  const { srcImage, label, link } = props;
  // const ref = useRef<HTMLDivElement>(null);
  // const isInView = useInView(ref);
  // const { scrollY } = useScroll();

  // const yImage = useTransform(scrollY, [offsetTop, offsetTop + 500], [0, 100]);

  return (
    <div className="relative flex h-full w-full overflow-hidden rounded-2xl p-4">
      <m.img
        style={
          {
            // y: yImage
          }
        }
        src={srcImage}
        alt="work"
        className="absolute bottom-0 left-0 min-h-full w-full object-cover"
      />
      <Link
        href={link}
        target="_blank"
        className="mt-auto flex w-full cursor-pointer items-center justify-between rounded-lg p-3 text-lg text-main-white backdrop-blur-xl"
      >
        <p className="text-lg font-medium ">{label}</p>
        <IconArrow />
      </Link>
    </div>
  );
};

export default Work;
