function BrushController(ctx, cursorModel) {
    var tag_brushSelect = document.querySelector("#brush-select");

    selectBrush();
    tag_brushSelect.addEventListener("change", selectBrush);

    function selectBrush() {
        var newBrush = tag_brushSelect.options[tag_brushSelect.selectedIndex].value;
        cursorModel.selectBrush(newBrush);
    }
}
