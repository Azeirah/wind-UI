function CursorController(cursorModel) {
    var tag_cursor    = document.querySelector("#cursor");
    var tag_swarmSize = document.querySelector("#swarm_size");
    var tag_offset    = document.querySelector("#swarm_offset");
    var tag_scale     = document.querySelector("#swarm_scale");
    var tag_rotation  = document.querySelector("#swarm_rotation");

    setCursor();
    tag_cursor.addEventListener("change", setCursor);

    setSwarmSize();
    tag_swarmSize.addEventListener("change", setSwarmSize);

    setOffset();
    tag_offset.addEventListener("change", setOffset);

    setScale();
    tag_scale.addEventListener("change", setScale);

    setRotation();
    tag_rotation.addEventListener("change", setRotation);

    function setCursor() {
        cursorModel.selectCursor(tag_cursor.options[tag_cursor.selectedIndex].value);
    }

    function setOffset() {
        var offset = parseInt(tag_offset.value);
        cursorModel.adjustOffset([offset, offset]);
    }

    function setScale() {
        var scale = parseFloat(tag_scale.value);
        cursorModel.adjustScale(scale);
    }

    function setRotation() {
        var rotation = parseFloat(tag_rotation.value);
        cursorModel.adjustRotation(rotation);
    }

    function setSwarmSize() {
        var swarmSize = parseInt(tag_swarmSize.value);
        cursorModel.adjustSwarmSize(swarmSize);
    }
}
