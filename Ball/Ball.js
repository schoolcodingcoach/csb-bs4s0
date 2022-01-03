/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ball extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("ball-a", "./Ball/costumes/ball-a.svg", { x: 47, y: 22 }),
      new Costume("ball-b", "./Ball/costumes/ball-b.svg", { x: 22, y: 22 }),
      new Costume("ball-c", "./Ball/costumes/ball-c.svg", { x: 22, y: 22 }),
      new Costume("ball-d", "./Ball/costumes/ball-d.svg", { x: 22, y: 22 }),
      new Costume("ball-e", "./Ball/costumes/ball-e.svg", { x: 22, y: 22 })
    ];

    this.sounds = [new Sound("pop", "./Ball/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.BROADCAST, { name: "over" }, this.whenIReceiveOver)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.costume = "start";
    this.size = 30;
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = false;
    while (true) {
      this.goto(this.mouse.x, this.mouse.y);
      if (this.touching(Color.rgb(153, 255, 255))) {
        this.broadcast("over");
        this.stage.costume = "Over";
      }
      yield;
    }
  }

  *whenIReceiveGame() {
    this.visible = true;
    this.stage.costume = "game";
  }

  *whenIReceiveWin() {
    this.visible = false;
  }

  *whenIReceiveOver() {
    this.visible = false;
  }
}
