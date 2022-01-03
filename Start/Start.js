/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Start extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Start/costumes/button3-a.svg", {
        x: 72,
        y: 72
      }),
      new Costume("button3-b", "./Start/costumes/button3-b.svg", {
        x: 45,
        y: 32
      })
    ];

    this.sounds = [new Sound("pop", "./Start/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "over" }, this.whenIReceiveOver)
    ];
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.broadcast("game");
  }

  *whenIReceiveWin() {
    this.visible = false;
  }

  *whenIReceiveOver() {
    this.visible = false;
  }
}
