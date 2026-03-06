//#region - ElementState and JSDoc for Rect class
interface ElementState {
  x: number;
  y: number;
  width: number;
  height: number;
  colour: string;
}

/**
 * @class
 * @description A class that represents a rectangle that can be drawn on a canvas element.
 * @example
 * const rect = new Rect({
 *   x: 50,
 *   y: 50,
 *   width: 100,
 *   height: 100,
 *   colour: 'red'
 * });
 * rect.draw();
 */
//#endregion

class Rect {
  //#region - Private fields
  /** The 2D rendering context of the canvas element. */
  #ctx!: CanvasRenderingContext2D;

  /** This is the current state of the element. */
  #state: ElementState;

  //#endregion

  /**
   * @example
   * const rect = new Rect({
   *   x: 50,
   *   y: 50,
   *   width: 100,
   *   height: 100,
   *   colour: 'red'
   * });
   */
  constructor(
    options: Partial<ElementState> = {},
    ctx?: CanvasRenderingContext2D,
  ) {
    this.#state = {
      x: options.x ?? 0,
      y: options.y ?? 0,
      width: options.width ?? 100,
      height: options.height ?? 100,
      colour: options.colour ?? "#000",
    };

    try {
      this.#ctx = ctx || document.querySelector("canvas")!.getContext("2d")!;
    } catch (error) {
      console.error(
        "Failed to find canvas context\nTry creating a canvas element before initialising a rectangle\n\n",
        error,
      );
    }
  }

  /** Draws the rectangle element to the canvas. */
  draw() {
    this.#ctx.fillStyle = this.#state.colour;
    this.#ctx.fillRect(
      this.#state.x,
      this.#state.y,
      this.#state.width,
      this.#state.height,
    );
  }

  /** Removes the reactangle element from the canvas. */
  remove() {
    this.#ctx.clearRect(
      this.#state.x,
      this.#state.y,
      this.#state.width,
      this.#state.height,
    );
  }

  //#region - Getters and Setters
  get x() {
    return this.#state.x;
  }

  get y() {
    return this.#state.y;
  }

  get width() {
    return this.#state.width;
  }

  get height() {
    return this.#state.height;
  }

  get colour() {
    return this.#state.colour;
  }

  get ctx() {
    return this.#ctx;
  }

  set x(val: number) {
    this.#state.x = val;
  }

  set y(val: number) {
    this.#state.y = val;
  }

  set width(val: number) {
    this.#state.width = val;
  }

  set height(val: number) {
    this.#state.height = val;
  }

  set colour(val: string) {
    this.#state.colour = val;
  }

  set ctx(val: CanvasRenderingContext2D) {
    this.#ctx = val;
  }
  //#endregion
}

export default Rect;

/*
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

function drawRotatedRect(x, y, width, height, degrees, color) {
    ctx.save(); // 1. Save state
    
    // 2. Move origin to the center of the rectangle
    ctx.translate(x + width / 2, y + height / 2);
    
    // 3. Rotate (degrees to radians)
    ctx.rotate(degrees * Math.PI / 180);
    
    // 4. Draw at the new (0,0) origin, offset by half dimensions
    ctx.fillStyle = color;
    ctx.fillRect(-width / 2, -height / 2, width, height);
    
    ctx.restore(); // 5. Restore state
}

// Draw a red rectangle at (100, 100) rotated 45 degrees
drawRotatedRect(100, 100, 100, 50, 45, 'red');
*/
