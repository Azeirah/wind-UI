function Lines(ctx) {
    var self = this;

    this.draw = function (ctx, pointer) {
        var stepSize = self.parameters.lineWidth / self.parameters.lineCount;
        if (pointer.previousPosition) {
            for (var i = 0; i < self.parameters.lineCount; i++) {
                ctx.beginPath();
                ctx.moveTo(pointer.previousPosition.x - self.parameters.lineWidth/2 + stepSize * i, pointer.previousPosition.y);
                ctx.lineTo(pointer.x - self.parameters.lineWidth/2 + stepSize * i, pointer.y);
                ctx.stroke();
            }
        }
    };

    this.parameters = {
        lineCount: 5,
        lineWidth: 25
    };
}
