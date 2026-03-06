import "./style.css";
import { Canvas, Rect } from "@gui";

const canvas = new Canvas(400, 300, "#fff");
canvas.append();

const rect = new Rect({
  x: 50,
  y: 50,
  width: 100,
  height: 100,
  colour: "black",
}, canvas.ctx);

canvas.draw((deltatime) => {
  rect.draw();
  rect.x += 10 * deltatime;
});
