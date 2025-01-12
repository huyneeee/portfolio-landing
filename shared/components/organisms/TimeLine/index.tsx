import TimeLineItem from "@/shared/components/molecules/TimeLineItem";

const DATA = [
  {
    time: "Sep 2022 - Present",
    nameCompany: "PARKA SOLUTIONS",
    description:
      "Lucky is a product company based in the US. Lucky build the bridge between brands, retailers and their customers."
  },
  {
    time: "Jul 2021 - Sep 2022",
    nameCompany: "ITS GLOBAL",
    description: "ITS GLOBAL is a company outsourcing Japanese market."
  }
];

const TimeLine = () => {
  return (
    <div className="flex flex-col gap-20 border-l border-main-lightgray py-5 pl-5">
      {DATA.map((item, key) => (
        <TimeLineItem key={key} {...item} index={key} />
      ))}
    </div>
  );
};

export default TimeLine;
