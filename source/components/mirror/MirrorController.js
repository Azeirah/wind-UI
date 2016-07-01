function MirrorController(mirrorModel) {
    var tag_mirror = document.querySelector("#symmetry");
    var tag_mirror_type = document.querySelector("#mirror_local");

    // set mirror to initially selected element..
    setMirror();
    // ..then listen for inputs, and set mirror appropriately
    tag_mirror.addEventListener("change", setMirror);

    // set mirroring type to initially checked value
    setMirrorType();
    // ..then listen for checkbox inputs, and set type appropriately
    tag_mirror_type.addEventListener("change", setMirrorType);

    function setMirror() {
        mirrorModel.selectMirror(tag_mirror.options[tag_mirror.selectedIndex].value);
    }

    function setMirrorType() {
        mirrorModel.selectMirroringType(tag_mirror_type.checked);
    }
}
