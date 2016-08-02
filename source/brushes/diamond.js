function Diamond(ctx) {
    this.draw = function (ctx, pointer) {
        ctx.beginPath();
        ctx.ellipse(
            pointer.x,
            pointer.y,
            .7 * pointer.speed,
            .3 * pointer.speed,
            pointer.direction,
            0,
            2 * Math.PI
        );
        ctx.fill();
    };

    this.beforeDrawing = function () {

    };

    this.parameters = {

    };
}
