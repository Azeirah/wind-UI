function MirrorModel() {
    this.mirrorTypes = {};
    this.selectedMirrorType = "mirror_none";
    // false = global mirroring (origin lies at middle of screen)
    // true = local mirror (butterfly-like mirorring)
    this.selectedMirroringType = false;
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

// mirroringtype = local/global mirroring
MirrorModel.prototype.selectMirroringType = function (mirroringType) {
    this.selectedMirroringType = mirroringType;
};

MirrorModel.prototype.serialize = function () {
    return {
        selectedMirrorType: this.selectedMirrorType,
        selectedMirroringType: this.selectedMirroringType
    };
};

MirrorModel.prototype.loadFromSerialization = function (data) {
    this.selectMirrorType = data.selectMirrorType;
    this.selectMirroringType = data.selectedMirroringType;
};
