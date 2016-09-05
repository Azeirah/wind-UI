function ColorModel() {
    this.scripts = {};
    this.selectedScript = "";
    this.colorFn = function () {
        return "black";
    };
}

ColorModel.prototype.setColorFn = function (colorFn) {
    this.colorFn = colorFn;
};

ColorModel.prototype.getColorFn = function () {
    return this.colorFn;
};

ColorModel.prototype.registerScript = function () {

};

ColorModel.prototype.activateScript = function (name) {
    this.selectedScript = this.scripts[name];
};

ColorModel.prototype.activeScript = function () {
    return this.selectedScript;
};
