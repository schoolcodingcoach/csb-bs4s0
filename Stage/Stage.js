/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("start", "./Stage/costumes/start.png", { x: 480, y: 360 }),
      new Costume("game", "./Stage/costumes/game.png", { x: 480, y: 360 }),
      new Costume("Over", "./Stage/costumes/Over.png", { x: 480, y: 360 }),
      new Costume("Win", "./Stage/costumes/Win.png", { x: 480, y: 360 })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
