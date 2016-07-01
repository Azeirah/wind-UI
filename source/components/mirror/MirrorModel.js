function MirrorModel() {
    this.mirrorTypes = {};
    this.selectedMirrorType = "mirror_none";
}

MirrorModel.prototype.addMirror = function (name, mirror) {
    this.mirrorTypes[name] = mirror;
};

MirrorModel.prototype.selectMirror = function (name) {
    this.selectedMirrorType = name;
};

MirrorModel.prototype.selectedMirror = function () {
    return this.mirrorTypes[this.selectedMirrorType];
};

MirrorModel.prototype.selectMirroringType = function (mirroringType) {
    this.mirroringType = mirroringType;
};

MirrorModel.prototype.selectedMirroringType = function () {
    return this.mirroringType;
};
