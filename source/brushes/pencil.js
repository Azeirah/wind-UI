function Line(ctx, toolbox) {
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
        ctx.lineWidth = 5;
    };
}

toolbox.addNewBrush(Line);
