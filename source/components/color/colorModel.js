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

ColorModel.prototype.serialize = function () {
    return {colorFn: this.colorFn.toString()};
};

ColorModel.prototype.loadFromSerialization = function (data) {
    // the colorFn script defines the `color` function.
    // eval`ing that script introduces tis color fn into our scope, allowing
    // us to assign it to this.colorFn
    eval(data.colorFn);
    this.colorFn = color;
};