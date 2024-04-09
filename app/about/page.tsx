import MainLayout from "@/layouts/MainLayout";
import TextUnderlineHoverEffect from "@/shared/components/atoms/framer-motion/HoverTextUnderline";
import TimeLine from "@/shared/components/organisms/TimeLine";
import { Metadata } from "next";

export const metadata: Metadata = {};

export default async function AboutPage() {
  return (
    <MainLayout>
      <section className="flex w-full max-lg:flex-col lg:min-h-[600px]">
        <div className="mt-10 flex grow flex-col pr-0 lg:p-20 lg:pb-10">
          <h1 className="text-5xl font-medium uppercase text-main-white lg:text-9xl">about me</h1>

          <div className="mt-auto flex w-fit flex-col max-lg:mt-5">
            <p className="mb-2 text-2xl font-medium text-main-white">Nguyen Quang Huy</p>
            <TextUnderlineHoverEffect
              href="tel:0374858357"
              className="w-fit cursor-pointer !text-main-lightgray"
            >
              Phone: 0374858357
            </TextUnderlineHoverEffect>
            <TextUnderlineHoverEffect
              href="mailto:huynq.webdev@gmail.com"
              className="w-fit cursor-pointer !text-main-lightgray"
            >
              Email: huynq.webdev@gmail.com
            </TextUnderlineHoverEffect>
          </div>
        </div>
        <div className="timeline mt-auto flex h-full shrink-0 items-center pb-10 max-lg:mt-10 lg:w-[500px] lg:justify-center">
          <TimeLine />
        </div>
      </section>
    </MainLayout>
  );
}
