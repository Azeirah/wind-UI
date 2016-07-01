function Toolbox(ctx) {
	var toolbox = this;
	var canvas = ctx.canvas;

    // default to pencil as brush
	var currentBrush = "Line";
	var brushes = {};

	toolbox.setRadius = function (radius) {
		toolbox.radius = radius;
		ctx.lineWidth = radius;
	};

	toolbox.setColor = function (color) {
		toolbox.color = color;
		ctx.strokeStyle = color;
	};

	toolbox.setBrush = function (whichBrush) {
		if (brushes.hasOwnProperty(whichBrush)) {
			currentBrush = whichBrush;
		} else {
            console.log("The brush `{0}` does not exist".format(whichBrush));
		}
	};

	toolbox.addNewBrush = function (newBrush) {
		brushes[newBrush.name] = new newBrush(ctx);
	};

    toolbox.activeBrush = function () {
        return brushes[currentBrush];
    };
}
