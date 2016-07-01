function CursorModel() {
    this.cursorTypes = {};
    this.selectedCursorType = "swinger";
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
