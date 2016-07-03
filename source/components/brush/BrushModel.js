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
