export class Rect {
    private color = 'red';
    private x = 0;
    private y = 0;
    private w = 10;
    private h = 20;
    private speed = 1;

    constructor(private ctx: CanvasRenderingContext2D, x: number, w: number, h: number, color: string){
        this.x = x;
        this.w = w;
        this.h = h;
        this.color = color;

        this.y = (this.ctx.canvas.height - h) - 40;
    }

    public moveRight():void {
        if (this.x < (this.ctx.canvas.width - this.w)){
            this.x += this.speed;
        }
    }

    public moveLeft():void {
        if (this.x > 0){
            this.x -= this.speed;
        }
    }

    private draw(): void{
        this.y = (this.ctx.canvas.height - this.h) - 40;
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}