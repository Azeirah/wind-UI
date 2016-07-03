function Line(ctx) {
    var pointer;

	this.draw = function draw(ctx, pointer) {
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
        ctx.lineWidth = this.parameters.thickness;
    };

    this.parameters = {
        thickness: 5
    };
}
