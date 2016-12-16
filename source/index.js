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

var editor = CodeMirror.fromTextArea(document.querySelector(".color-script"), {
    mode: "javascript"
});

var ctx = initializeCanvas(parent);

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

var brushModel = new BrushModel(ctx);
brushModel.registerBrush("Line", Line);
brushModel.registerBrush("Lines", Lines);
brushModel.registerBrush("Circle", Circle);
brushModel.registerBrush("Diamond", Diamond);
brushModel.registerBrush("Sandline", Sandline);
var brushController = new BrushController(ctx, brushModel);

var colorModel = new ColorModel(ctx);
var colorController = new ColorController(colorModel, editor);

var painter = new Painter(ctx, brushModel, cursorModel, mirrorModel, colorModel);


// (function () {
//     var previousModel = "";

//     function insertParam(key, value) {
//         key = escape(key); value = escape(value);

//         var kvp = document.location.search.substr(1).split('&');
//         if (kvp == '') {
//             document.location.search = '?' + key + '=' + value;
//         }
//         else {

//             var i = kvp.length; var x; while (i--) {
//                 x = kvp[i].split('=');

//                 if (x[0] == key) {
//                     x[1] = value;
//                     kvp[i] = x.join('=');
//                     break;
//                 }
//             }

//             if (i < 0) { kvp[kvp.length] = [key, value].join('='); }

//             //this will reload the page, it's likely better to store this until finished
//             document.location.search = kvp.join('&');
//         }
//     }

//     setInterval(function () {
//         var coModel = colorModel.serialize();
//         var cuModel = cursorModel.serialize();
//         var brModel = brushModel.serialize();
//         var miModel = mirrorModel.serialize();

//         var totalModel = JSON.stringify({
//             color: coModel,
//             cursor: cuModel,
//             brush: brModel,
//             mirror: miModel
//         });

//         if (totalModel !== previousModel) {
//             previousModel = totalModel;
//             var u = new Uri(window.location);
//             if (u.hasQueryParam("save")) {
//                 u.replaceQueryParam("save", btoa(totalModel));
//             } else {
//                 u.addQueryParam("save", btoa(totalModel));
//             }
//             window.history.pushState("p", null, u.toString());
//         }
//     }, 1000);
// }());
