import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Ball from "./Ball/Ball.js";
import Start from "./Start/Start.js";
import Finish from "./Finish/Finish.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite2 from "./Sprite2/Sprite2.js";

const stage = new Stage({ costumeNumber: 3 });

const sprites = {
  Ball: new Ball({
    x: -233,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 30,
    visible: false
  }),
  Start: new Start({
    x: -171,
    y: -83,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false
  }),
  Finish: new Finish({
    x: 141,
    y: 110,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: -24.38066666666667,
    y: -79,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite2: new Sprite2({
    x: 148,
    y: 16,
    direction: 155,
    costumeNumber: 1,
    size: 100,
    visible: false
  })
};

const project = new Project(stage, sprites);
export default project;
