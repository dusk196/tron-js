import { Block } from "./Block";

export class Renderer {
    private ctx: CanvasRenderingContext2D;
    private rows: number;
    private cols: number;
    private size: number;
    private canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement, rows: number, cols: number, size: number) {
        this.canvas = canvas;
        this.rows = rows;
        this.cols = cols;
        this.size = size;
        this.canvas.width = cols * size;
        this.canvas.height = rows * size;

        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("Canvas context not available");
        this.ctx = ctx;
    }

    clear() {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawGrid() {
        this.ctx.strokeStyle = "white";
        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                this.ctx.strokeRect(c * this.size, r * this.size, this.size, this.size);
            }
        }
    }

    drawBlock(block: Block) {
        this.ctx.fillStyle = "limegreen";
        this.ctx.fillRect(block.x * this.size, block.y * this.size, this.size, this.size);
    }
}
