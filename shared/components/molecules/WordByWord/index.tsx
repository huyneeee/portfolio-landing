/* eslint-disable react-hooks/rules-of-hooks */
import { HEIGHT_ONE_FRAME_SCROLL } from "@/config/animations";
import { MotionValue, useScroll, useTransform } from "framer-motion";
import { m } from "@/shared/components/atoms/framer-motion";

type IPropsWordByWordAnimate = {
  text: string;
  yText: MotionValue<number>;
  xText: MotionValue<number>;
  startScrollY: number;
  inputRangeShowText: number[];
  distanceScroll?: number;
};

const WordByWordAnimate = ({
  text,
  yText,
  xText,
  startScrollY,
  inputRangeShowText,
  distanceScroll = HEIGHT_ONE_FRAME_SCROLL
}: IPropsWordByWordAnimate) => {
  const { scrollY } = useScroll();
  const words = text.split(" ");
  const lengthText = text.length;
  const oneHeightTextScroll = distanceScroll / lengthText;

  let lastIndex = 1;

  return (
    <m.div
      className="text-about-us absolute right-0 top-0 z-10 flex flex-wrap lg:max-w-[500px] xl:max-w-[681px]"
      style={{ y: yText, x: xText }}
    >
      {words.map((word, keyWord) => {
        if (keyWord > 0) {
          lastIndex += words[keyWord - 1].length;
        }

        return (
          <m.div key={keyWord}>
            {word.split("").map((letter, keyLetter) => {
              const startIndex = lastIndex + keyLetter;
              const endIndex = startIndex + 1;

              const opacity = useTransform(
                scrollY,
                [
                  ...inputRangeShowText,
                  startScrollY + startIndex * oneHeightTextScroll,
                  startScrollY + endIndex * oneHeightTextScroll
                ],
                [0, 0, 0.3, 0.3, 1]
              );
              return (
                <m.span key={`${keyWord}_${keyLetter}`} style={{ opacity }}>
                  {letter}
                </m.span>
              );
            })}
            <span className="mr-[9px]" />
          </m.div>
        );
      })}
    </m.div>
  );
};

export default WordByWordAnimate;
