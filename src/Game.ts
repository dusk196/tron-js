import { Renderer } from "./Renderer";
import { Block } from "./Block";

export class Game {
    private renderer: Renderer;
    private block: Block;

    private last = 0;
    private delta = 0;
    private readonly timestep = 1000 / 10; // 10 FPS for clarity

    constructor(canvas: HTMLCanvasElement) {
        this.renderer = new Renderer(canvas, 50, 50, 10);
        this.block = new Block(49, 25); // start at right side, middle row
    }

    private update() {
        if (this.block.x > 0) {
            this.block.moveLeft();
        }
    }

    private render() {
        this.renderer.clear();
        this.renderer.drawGrid();
        this.renderer.drawBlock(this.block);
    }

    private loop = (timestamp: number) => {
        if (!this.last) this.last = timestamp;
        this.delta += timestamp - this.last;
        this.last = timestamp;

        while (this.delta >= this.timestep) {
            this.update();
            this.delta -= this.timestep;
        }

        this.render();
        requestAnimationFrame(this.loop);
    };

    start() {
        requestAnimationFrame(this.loop);
    }
}
