import FadeInBox from "@/shared/components/atoms/framer-motion/FadeInBox";
import Work from "@/shared/components/molecules/Work";

const variants = {
  hidden: {
    opacity: 0,
    x: 100
  },
  show: {
    opacity: 1,
    x: 0
  }
};

const Works = () => {
  return (
    <section className="works w-full lg:mt-10">
      <h1 className="pb-4 text-center text-6xl font-medium text-main-white lg:py-6 lg:text-9xl">
        WORKS
      </h1>
      <div className="relative mb-3 flex h-[200px] w-full lg:mb-4 lg:h-[600px]">
        <FadeInBox
          className="h-full w-full"
          variants={variants}
          transition={{
            delay: 0.3
          }}
        >
          <Work
            srcImage="/images/image-4.png"
            label="Lucky / Omnichannel"
            link="https://luckylabs.io/"
          />
        </FadeInBox>
      </div>
      <div className="flex h-[400px] gap-3 max-lg:flex-col lg:gap-4">
        <div className=" flex-1">
          <FadeInBox
            className="h-full w-full"
            variants={variants}
            transition={{
              delay: 0.3 * 2
            }}
          >
            <Work
              srcImage="/images/image-6.jpg"
              label="Sales Together / Affiliate"
              link="https://sale-together.its-globaltek.com/home"
            />
          </FadeInBox>
        </div>
        <div className="flex-1">
          <FadeInBox
            className="h-full w-full"
            variants={variants}
            transition={{
              delay: 0.3 * 3
            }}
          >
            <Work
              srcImage="/images/image-5.jpg"
              label="Tiktak / Website NFT"
              link="https://landing.tictak.io/"
            />
          </FadeInBox>
        </div>
      </div>
    </section>
  );
};

export default Works;
