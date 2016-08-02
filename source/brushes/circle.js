function Circle(ctx) {
    this.draw = function (ctx, pointer) {
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, pointer.speed, 0, 2 * Math.PI);
        ctx.fill();
    };

    this.beforeDrawing = function (event) {

    };

    this.parameters = {

    };
}
