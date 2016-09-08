function Painter(ctx, brushModel, cursorModel, mirrorModel, colorModel) {
    var painter = this;
    var canvas = ctx.canvas;
    var pointers = [];
    var tag_clearbutton = document.querySelector(".clear");

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
            ctx.strokeStyle = colorModel.getColorFn()(this);
            ctx.fillStyle = colorModel.getColorFn()(this);
            brushModel.activeBrush().draw(ctx, this);
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
            var brush = brushModel.activeBrush();
            if (brush.beforeDrawing) {
                brush.beforeDrawing();
            }
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

                if (pointer.offsetX === 0 && pointer.offsetY === 0) {
                    var offset = cursorModel.getOffset();
                    pointer.setOffset((Math.random() - 0.5) * offset[0], (Math.random() - 0.5) * offset[1]);
                }
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

    tag_clearbutton.addEventListener("click", function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        manager.freeEntities();
        manager.entities.forEach(function (p) {
            p.dead = true;
        });
        pointers = [];
    });
}
