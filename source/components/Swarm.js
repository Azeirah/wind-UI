function Swarm(ctx, toolbox, cursorModel, mirrorModel) {
    var canvas = ctx.canvas;
    var pointers = [];

    var manager = new PointerManager();

    this.swarmSize = 1;

    this.spreadRange = 0;
    this.scaleRange = 0;

    canvas.addEventListener("az-dragStart", function shiva(event) {
        // Destroy all existing life
        if (pointers) {
            pointers.forEach(function (pointer) {
                pointer.dead = true;
                if (pointer.destruct) pointer.destruct();
            });
        }

        function drawFn () {
            toolbox.activeBrush().draw(ctx, this);
        }

        for (var i = 0; i < swarm.swarmSize; i++) {
            // Create anew
            var CursorConstructor = cursorModel.selectedCursor();
            var pointer = new CursorConstructor(event.offsetX, event.offsetY);
            if (pointer.setTarget) {
                pointer.setTarget(event.offsetX, event.offsetY);
                manager.addEntity(pointer);
            }
            pointers.push(pointer);
            pointer.onPositionChanged(drawFn);
            if (mirrorModel.selectedMirror()) {
                pointer.setDrawingFunction(drawFn);
                mirror(pointer, mirrorModel.selectedMirror(), mirrorModel.selectedMirroringType());
            }
        }

        if (event.which === MOUSE.left) {
            toolbox.activeBrush().beforeDrawing();
        }
    });

    canvas.addEventListener("az-drag", function(event) {
        if (event.which === MOUSE.left) {
            for (var i = 0; i < pointers.length; i++) {
                if (pointers[i].setTarget) {
                    pointers[i].setTarget(event.offsetX, event.offsetY);
                }
            }
        }
    });

    canvas.addEventListener("az-dragEnd", function () {
        manager.freeEntities();
        pointers.forEach(function (pointer) {
            pointer.friction = 0.9;
        });
    });
}
