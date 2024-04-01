import AboutMeTextLinear from "@/features/verScroll/AboutMe";
import MainHero from "@/features/verScroll/MainHero";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <MainHero />
      <AboutMeTextLinear />
    </main>
  );
}
