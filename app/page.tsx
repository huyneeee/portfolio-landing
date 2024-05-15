import AboutMeTextLinear from "@/features/verScroll/AboutMe";
import MainHero from "@/features/verScroll/MainHero";
import MySkill from "@/shared/components/organisms/MySkill";
import Works from "@/shared/components/organisms/Work";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-between pb-20">
      <MainHero />
      <AboutMeTextLinear />
      <MySkill />
      <Works />
    </section>
  );
}
