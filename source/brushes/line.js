function Line(ctx) {
    var pointer;
    var self = this;

	this.draw = function draw(ctx, pointer) {
        var params = evalBrushParams(self.parameters, pointer);
        ctx.lineWidth = params.thickness;
        if (pointer.previousPosition) {
            ctx.beginPath();
            ctx.moveTo(pointer.previousPosition.x, pointer.previousPosition.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
        }
    };

    this.beforeDrawing = function (event) {
        ctx.lineJoin = "round";
        ctx.lineCap  = "round";
    };

    this.parameters = {
        thickness: 5
    };
}
