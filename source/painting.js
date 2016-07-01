var parent = document.querySelector(".paint");

function fitCanvasToElement(canvas, element) {
    var bbox = element.getBoundingClientRect();
    canvas.width = bbox.width;
    canvas.height = bbox.height;
}

function initializeCanvas(parent) {
    // create the canvas
    var canvas = document.createElement("canvas");

    // make sure canvas is always at its maximum size
    fitCanvasToElement(canvas, parent);
    window.addEventListener("resize", fitCanvasToElement.bind(null, canvas, parent));

    // append canvas to page
    parent.appendChild(canvas);

    var ctx = canvas.getContext("2d");

    return ctx;
}

var ctx            = initializeCanvas(parent);
var toolbox        = new Toolbox(ctx);

var cursorModel = new CursorModel();
// set up the model
cursorModel.addCursor("swinger", Swinger);
cursorModel.addCursor("slider", Slider);
cursorModel.addCursor("stalker", Stalker);
cursorModel.addCursor("cursor", Cursor);
var cursorController = new CursorController(cursorModel);

var mirrorModel = new MirrorModel();
mirrorModel.addMirror("mirror_none", false);
mirrorModel.addMirror("mirror_horizontally", "horizontal");
mirrorModel.addMirror("mirror_vertically", "vertical");
mirrorModel.addMirror("mirror_diagonally", "diagonal");
mirrorModel.addMirror("mirror_all", "4-way");
var mirrorController = new MirrorController(mirrorModel);

var swarm = new Swarm(ctx, toolbox, cursorModel, mirrorModel);
