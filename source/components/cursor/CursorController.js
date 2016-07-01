function CursorController(cursorModel) {
    var tag_cursor   = document.querySelector("#cursor");
    var tag_offset   = document.querySelector("#swarm_offset");
    var tag_spread   = document.querySelector("#swarm_spread");
    var tag_rotation = document.querySelector("#swarm_rotation");

    setCursor();
    tag_cursor.addEventListener("change", setCursor);
    setOffset();
    tag_offset.addEventListener("change", setOffset);
    setSpread();
    tag_offset.addEventListener("change", setSpread);
    setRotation();
    tag_offset.addEventListener("change", setRotation);

    function setCursor() {
        cursorModel.selectCursor(tag_cursor.options[tag_cursor.selectedIndex].value);
    }

    function setOffset() {
        var offset = parseInt(tag_offset.value);
        cursorModel.adjustOffset(offset);
    }

    function setSpread() {
        var spread = parseInt(tag_spread.value);
        cursorModel.adjustSpread(spread);
    }

    function setRotation() {
        var rotation = parseInt(tag_rotation.value);
        cursorModel.adjustRotation(rotation);
    }
}
