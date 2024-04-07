import { URL_IMAGES_SKILL } from "@/constant/skill";
import { randomNumber } from "@/shared/utils/function";
import Matter, {
  Bodies,
  // Body,
  Composite,
  Engine,
  Mouse,
  MouseConstraint,
  Render,
  Runner,
  World
} from "matter-js";

const THICKNESS = 60;

const setupWalls = (cw: number, ch: number, world: Matter.World) => {
  const ground = Bodies.rectangle(cw / 2, ch + THICKNESS / 2, 27184, THICKNESS, {
    isStatic: true,
    render: {
      visible: false
    }
  });
  const leftWall = Bodies.rectangle(0 - THICKNESS / 2, ch / 2, THICKNESS, ch * 5, {
    isStatic: true,
    render: {
      visible: false
    }
  });

  const rightWall = Bodies.rectangle(cw + THICKNESS / 2, ch / 2, THICKNESS, ch * 5, {
    isStatic: true,
    render: {
      visible: false
    }
  });

  Composite.add(world, [ground, leftWall, rightWall]);
  return {
    ground,
    leftWall,
    rightWall
  };
};

const setupMouse = (
  canvas: HTMLElement,
  engine: Matter.Engine,
  render: Matter.Render,
  world: Matter.World
) => {
  // add mouse control
  const mouse = Mouse.create(canvas);
  const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
      stiffness: 0.2,
      render: {
        visible: false
      }
    }
  });

  Composite.add(world, mouseConstraint);
  render.mouse = mouse;
};

const renderSkill = (cw: number, ch: number, world: Matter.World) => {
  const stack = URL_IMAGES_SKILL.map((src, index) => {
    const wRandom = randomNumber(index, cw);

    return Bodies.rectangle(wRandom, -ch, 300, 94, {
      render: {
        sprite: {
          texture: src,
          xScale: 0.8,
          yScale: 0.8
        }
      },
      chamfer: {
        radius: 40
      }
    });
  });

  Composite.add(world, stack);
};

// const scaleBodies = (world: Matter.World, matterContainer: HTMLElement) => {
//   const allBodies = Composite.allBodies(world);

//   allBodies.forEach((body) => {
//     if (body.isStatic === true) return; // don't scale walls and ground
//     const { min, max } = body.bounds;
//     const bodyWidth = max.x - min.x;
//     let scaleFactor = (matterContainer.clientWidth * 250) / bodyWidth;

//     Body.scale(body, 0.4, 0);
//   });
// };

const resizeWindow = (
  render: Matter.Render,
  matterContainer: HTMLElement,
  ground: Matter.Body,
  rightWall: Matter.Body,
  // eslint-disable-next-line no-unused-vars
  world: Matter.World
) => {
  render.canvas.width = matterContainer.clientWidth;
  render.canvas.height = matterContainer.clientHeight;

  // reposition ground
  Matter.Body.setPosition(
    ground,
    Matter.Vector.create(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + THICKNESS / 2
    )
  );

  // reposition right wall
  Matter.Body.setPosition(
    rightWall,
    Matter.Vector.create(
      matterContainer.clientWidth + THICKNESS / 2,
      matterContainer.clientHeight / 2
    )
  );
};

const establishMatter = (engine: Matter.Engine, render: Matter.Render) => {
  Runner.run(engine);
  Render.run(render);
};

const destroyMatter = (engine: Matter.Engine, render: Matter.Render) => {
  Render.stop(render);
  World.clear(engine.world, false);
  Engine.clear(engine);
  render.canvas.remove();
  render.textures = {};
};

const MatterUtils = Object.freeze({
  setupWalls,
  setupMouse,
  renderSkill,
  resizeWindow,
  establishMatter,
  destroyMatter
});

export { MatterUtils };
