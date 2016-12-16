function Diamond(ctx) {
    var self = this;

    this.draw = function (ctx, pointer) {
        var params = evalBrushParams(self.parameters, pointer);
        ctx.beginPath();
        ctx.ellipse(
            pointer.x,
            pointer.y,
            .7 * params.size,
            .3 * params.size,
            pointer.direction,
            0,
            2 * Math.PI
        );
        ctx.fill();
    };

    this.beforeDrawing = function () {

    };

    this.parameters = {
        size: 5
    };
}
