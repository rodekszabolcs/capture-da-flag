import * as pixi from "pixi.js";

export interface IPixiController {
  pixiApp: pixi.Application;
  width: number;
  height: number;
}

export class PixiController implements IPixiController {
  pixiApp: pixi.Application;
  width: number;
  height: number;

  constructor() {
    this.width = document.body.clientWidth;
    this.height = document.body.clientHeight;
    this.pixiApp = new pixi.Application({
      width: this.width,
      height: this.height,
    });
    document.body.appendChild(this.pixiApp.view);
  }
}

export default PixiController;
