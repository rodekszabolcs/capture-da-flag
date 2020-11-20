import "./styles.scss";
import { PixiController } from "./pixi-controller";

console.log(
  "See this in your browser console: Typescript Webpack Starter Launched",
);

const ctrl = new PixiController();

console.log(`Width ${ctrl.width}, height: ${ctrl.height}`);
