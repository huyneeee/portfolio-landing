import Work from "../../molecules/Work";

const Works = () => {
  return (
    <section className="works mb-10 w-full lg:mt-10">
      <h1 className="pb-4 text-center text-6xl font-medium text-main-white lg:py-6 lg:text-9xl">
        WORKS
      </h1>
      <div className="relative mb-3 flex h-[300px] w-full lg:mb-4 lg:h-[600px]">
        <Work
          srcImage="/images/image-4.png"
          label="Lucky / Omnichannel"
          link="https://luckylabs.io/"
        />
      </div>
      <div className="flex h-[600px] gap-3 max-lg:flex-col lg:h-[400px] lg:gap-4">
        <div className=" flex-1">
          <Work
            srcImage="/images/image-6.jpg"
            label="Sales Together / Affiliate"
            link="https://sale-together.its-globaltek.com/home"
          />
        </div>
        <div className="flex-1">
          <Work
            srcImage="/images/image-5.jpg"
            label="Tiktak / Website NFT"
            link="https://landing.tictak.io/"
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
