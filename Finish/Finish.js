/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Finish extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button3-a", "./Finish/costumes/button3-a.svg", {
        x: 45,
        y: 32
      }),
      new Costume("button3-b", "./Finish/costumes/button3-b.svg", {
        x: 45,
        y: 32
      })
    ];

    this.sounds = [new Sound("pop", "./Finish/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "over" }, this.whenIReceiveOver),
      new Trigger(Trigger.BROADCAST, { name: "win" }, this.whenIReceiveWin),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.BROADCAST, { name: "game" }, this.whenIReceiveGame),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveOver() {
    this.visible = false;
  }

  *whenIReceiveWin() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "Win";
    this.broadcast("win");
  }

  *whenIReceiveGame() {
    this.visible = true;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
