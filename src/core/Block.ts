export class Block {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    moveLeft() {
        this.x -= 1;
    }
}
