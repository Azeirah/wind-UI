function CursorController(cursorModel) {
    var tag_cursor = document.querySelector("#cursor");

    setCursor();
    tag_cursor.addEventListener("change", setCursor);

    function setCursor() {
        cursorModel.selectCursor(tag_cursor.options[tag_cursor.selectedIndex].value);
    }
}
