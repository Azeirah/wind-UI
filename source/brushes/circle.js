function Circle(ctx) {
    var self = this;

    this.draw = function (ctx, pointer) {
        var params = evalBrushParams(self.parameters, pointer);
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, params.radius, 0, 2 * Math.PI);
        ctx.fill();
    };

    this.beforeDrawing = function (event) {

    };

    this.parameters = {
        radius: 5
    };
}
