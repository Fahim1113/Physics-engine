/**
 * @class
 * @description A class that represents a canvas element that can be drawn on the document body.
 * @example
 * const canvas = new Canvas(400,30,"white")
 * canvas.draw()
 */

class Canvas {
  //#region - Fields
  /** The canvas element that is being drawn on. */
  #canvas!: HTMLCanvasElement;
  /** The 2D rendering context of the canvas element. */
  #ctx!: CanvasRenderingContext2D;
  /** Animation ID for managing the animation loop. */
  #animationId?: number;
  /** The timestamp of the last frame. */
  #lastTime = 0;

  /** The width of the canvas element. */
  width: number;
  /** The height of the canvas element. */
  height: number;
  /** The background colour of the canvas element. */
  colour: string;
  //#endregion

  /**
   * @example
   * const canvas = new Canvas(400,30,"white")
   * canvas.draw()
   */
  constructor(width: number, height: number, colour: string) {
    this.width = width;
    this.height = height;
    this.colour = colour;

    this.#init();
  }

  #init() {
    const scale = window.devicePixelRatio || 1;

    this.#canvas = document.createElement("canvas");
    this.#canvas.width = this.width * scale;
    this.#canvas.height = this.height * scale;

    this.#canvas.style.width = `${this.width}px`;
    this.#canvas.style.height = `${this.height}px`;
    this.#canvas.style.backgroundColor = this.colour;

    this.#ctx = this.#canvas.getContext("2d")!;
    this.#ctx.scale(scale, scale);
  }

  /**
   * Starts the drawing loop.
   * @param func - Callback function that receives the current timestamp
   * @returns A function to cancel the animation loop
   */
  draw(func: (deltatime: number) => void) {
    const animate = (time: number) => {
      this.clear();
      let deltatime = (time - this.#lastTime)/1000;
      this.#lastTime = time;
      func(deltatime);
      this.#animationId = requestAnimationFrame(animate);
    };

    this.#animationId = requestAnimationFrame(animate);
  }

  /** Stops the animation loop. */
  stop() {
    cancelAnimationFrame(this.#animationId!);
  }

  /** Clears the canvas element. */
  clear() {
    this.#ctx.clearRect(0, 0, this.width, this.height);
  }

  /** Adds the canvas element to the document body. */
  append() {
    document.body.appendChild(this.#canvas);
  }

  /** Removes the canvas element from the document body. */
  remove() {
    this.#canvas.remove();
  }

  get ctx() {
    return this.#ctx;
  }
}

export default Canvas;
