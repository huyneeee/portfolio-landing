import { HEIGHT_ONE_FRAME_SCROLL } from "@/config/animations";
import { MotionValue, m, useScroll, useTransform } from "framer-motion";

type IPropsWordByWordAnimate = {
  text: string;
  yText: MotionValue<number>;
  xText: MotionValue<number>;
  startScrollY: number;
  inputRangeShowText: number[];
};

const WordByWordAnimate = ({
  text,
  yText,
  xText,
  startScrollY,
  inputRangeShowText
}: IPropsWordByWordAnimate) => {
  const { scrollY } = useScroll();
  const words = text.split(" ");
  const lengthText = text.length;
  const oneHeightTextScroll = HEIGHT_ONE_FRAME_SCROLL / lengthText;

  let lastIndex = 1;

  return (
    <m.div
      className="absolute right-0 top-0 z-10 flex max-w-[681px] flex-wrap  text-[53px] font-medium leading-[53px] text-main-white"
      style={{ y: yText, x: xText }}>
      {words.map((word, keyWord) => {
        if (keyWord > 0) {
          lastIndex += words[keyWord - 1].length;
        }

        return (
          <m.div>
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
