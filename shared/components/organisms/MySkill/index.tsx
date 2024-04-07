"use client";
import { Engine, Render } from "matter-js";
import { useEffect, useRef } from "react";
import { MatterUtils } from "./matter";
import { useInView } from "framer-motion";

const MySkill = () => {
  const scene = useRef<HTMLDivElement>(null);
  const engine = useRef(Engine.create());
  const isInView = useInView(scene, {
    margin: "200px 0px -600px 0px"
  });

  useEffect(() => {
    if (!scene.current) return;
    const cw = scene.current?.offsetWidth;
    const ch = scene.current?.offsetHeight;
    const matterContainer = scene.current;
    const world = engine.current.world;

    const render = Render.create({
      element: matterContainer,
      engine: engine.current,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "#000"
      }
    });

    const { ground, rightWall } = MatterUtils.setupWalls(cw, ch, world);
    MatterUtils.setupMouse(render.canvas, engine.current, render, world);

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: cw, y: ch }
    });

    MatterUtils.renderSkill(cw, ch, world);

    if (isInView) {
      MatterUtils.establishMatter(engine.current, render);
    }

    window.addEventListener("resize", () =>
      MatterUtils.resizeWindow(render, matterContainer, ground, rightWall, world)
    );

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      MatterUtils.destroyMatter(engine.current, render);
    };
  }, [isInView, engine]);

  return (
    <div className="w-full max-lg:hidden lg:mt-10">
      <h1 className="pb-4 text-center text-6xl font-medium text-main-white lg:py-6 lg:text-9xl">
        SKILLS
      </h1>
      <div ref={scene} className="h-[600px] w-full overflow-hidden"></div>
    </div>
  );
};

export default MySkill;
