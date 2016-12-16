function BrushModel(ctx) {
    this.brushes = {

    };
    this.ctx = ctx;

    this.selectedBrush = "";
}

BrushModel.prototype.registerBrush = function(name, BrushCtor) {
    this.brushes[name] = new BrushCtor(this.ctx);
};

BrushModel.prototype.selectBrush = function(name) {
    this.selectedBrush = name;
};

BrushModel.prototype.activeBrush = function() {
    return this.brushes[this.selectedBrush];
};

BrushModel.prototype.serialize = function () {
    // this function picks out the information from brushes we care about;
    // their name and current parameter values
    function preSerializeBrush (name, brush) {
        return {
            name: name,
            parameters: brush.parameters
        };
    }

    var serialized = {
        selectedBrush: this.selectedBrush,
        brushes: {}
    };

    for (var brushName in this.brushes) {
        serialized.brushes[brushName] = preSerializeBrush(brushName, this.brushes[brushName]);
    }

    return serialized;
};

BrushModel.prototype.loadFromSerialization = function (data) {
    this.selectedBrush = data.selectedBrush;
    // assume that all brushes in this dataset exist on this.brushes already
    // we're modifying the existing ones, not creating new brushes.
    // this can get a bit hairy if in future updates we add/remove/rename any of the brushes, or their parameters
    for (var brushName in data.brushes) {
        if (this.brushes[brushName]) {
            this.brushes[brushName].parameters = data.brushes[brushName].parameters;
        }
    }
};
