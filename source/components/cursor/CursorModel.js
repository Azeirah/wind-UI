function CursorModel() {
    this.cursorTypes = {};
    this.selectedCursorType = "swinger";

    this.swarmSize = 1;
    this.offset = 0;
    this.scale = 0;
    this.rotation = 0;
}

CursorModel.prototype.selectedCursor = function() {
    return this.cursorTypes[this.selectedCursorType];
};

CursorModel.prototype.selectCursor = function (cursor) {
    this.selectedCursorType = cursor;
};

CursorModel.prototype.addCursor = function (name, cursor) {
    this.cursorTypes[name] = cursor;
};


CursorModel.prototype.adjustSwarmSize = function (swarmSize) {
    if (swarmSize < 0) return;
    if (swarmSize > 500) swarmSize = 500;

    this.swarmSize = Math.abs(swarmSize);
};

CursorModel.prototype.getSwarmSize = function () {
    return this.swarmSize;
};

CursorModel.prototype.adjustOffset = function (offset) {
    this.offset = offset;
};

CursorModel.prototype.getOffset = function () {
    return this.offset;
};

CursorModel.prototype.adjustScale = function(scale) {
    this.scale = scale;
};

CursorModel.prototype.getScale = function () {
    return this.scale;
}

CursorModel.prototype.adjustRotation = function(rotation) {
    this.rotation = rotation;
};

CursorModel.prototype.getRotation = function() {
    return this.rotation;
};
