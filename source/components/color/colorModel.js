function ColorModel() {
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
