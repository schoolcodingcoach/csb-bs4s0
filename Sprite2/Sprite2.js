/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite2/costumes/costume1.png", {
        x: 30,
        y: 114
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "over" }, this.whenIReceiveOver),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      this.direction += 1;
      yield;
    }
  }

  *whenIReceiveOver() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    this.visible = false;
  }

  *whenIReceiveGame() {
    this.visible = true;
  }
}
