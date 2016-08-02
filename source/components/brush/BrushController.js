function BrushController(ctx, brushModel) {
    var tag_brushSelect = document.querySelector("#brush-select");
    var tag_brushParamsContainer = document.querySelector(".brush-params");

    selectBrush();
    tag_brushSelect.addEventListener("change", selectBrush);

    function selectBrush() {
        var newBrush = tag_brushSelect.options[tag_brushSelect.selectedIndex].value;
        brushModel.selectBrush(newBrush);

        var params = brushModel.activeBrush().parameters;
        console.log(params);
        var ui = controlsFromJson(params);
        tag_brushParamsContainer.innerHTML = "";
        tag_brushParamsContainer.appendChild(ui);
    }
}
