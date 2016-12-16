function Lines(ctx) {
    var self = this;

    this.draw = function (ctx, pointer) {
        var params = evalBrushParams(self.parameters, pointer);
        var stepSize = params.lineWidth / params.lineCount;

        if (pointer.previousPosition) {
            for (var i = 0; i < params.lineCount; i++) {
                ctx.beginPath();
                ctx.moveTo(pointer.previousPosition.x - params.lineWidth/2 + stepSize * i, pointer.previousPosition.y);
                ctx.lineTo(pointer.x - params.lineWidth/2 + stepSize * i, pointer.y);
                ctx.stroke();
            }
        }
    };

    this.parameters = {
        lineCount: 5,
        lineWidth: 25
    };
}
