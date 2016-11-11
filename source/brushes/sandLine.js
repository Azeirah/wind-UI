function lerp(a, b, f) {
    return a + f * (b - a);
}

function Sandline(ctx) {
    var self = this;


    this.draw = function (ctx, pointer) {
        var params = evalBrushParams(self.parameters, pointer);

        for (var i = 0; i < params.samples; i++) {
            var location = Math.random();
            var x = lerp(pointer.x, pointer.previousPosition.x, location);
            var y = lerp(pointer.y, pointer.previousPosition.y, location);

            ctx.fillRect(x, y, 1, 1);
        }
    };

    this.beforeDrawing = function () {

    };

    this.parameters = {
        samples: 10
    };
}
