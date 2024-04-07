import AboutMeTextLinear from "@/features/verScroll/AboutMe";
import MainHero from "@/features/verScroll/MainHero";
import MySkill from "@/shared/components/organisms/MySkill";
import MainLayout from "@/layouts/MainLayout";
import Works from "@/shared/components/organisms/Work";

export default function Home() {
  return (
    <MainLayout>
      <section className="flex flex-col items-center justify-between pb-20">
        <MainHero />
        <AboutMeTextLinear />
        <MySkill />
        <Works />
      </section>
    </MainLayout>
  );
}
