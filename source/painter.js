function Painter(ctx, toolbox, cursorModel, mirrorModel) {
    var painter = this;
    var canvas = ctx.canvas;
    var pointers = [];

    var manager = new PointerManager();

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

        for (var i = 0; i < cursorModel.getSwarmSize(); i++) {
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
                var pointer = pointers[i];
                if (pointers[i].setTarget) {
                    pointers[i].setTarget(event.offsetX, event.offsetY);
                }

                if (pointer.scaling === 0) {
                    pointer.setScale(Math.random() * cursorModel.getScale());
                }

                if (pointer.rotation === 0) {
                    pointer.setRotation((Math.random() - 0.5) * cursorModel.getRotation());
                }

                // if (pointer.offsetX === 0 && pointer.offsetY === 0) {
                    // pointer.setOff?
                // }
            }
        }
    });

    canvas.addEventListener("az-dragEnd", function () {
        manager.freeEntities();
        pointers.forEach(function (pointer) {
            pointer.friction = 0.9;
        });
        pointers = [];
    });
}
