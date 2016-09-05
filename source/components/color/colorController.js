function ColorController(colorModel, editor) {
    var previousContent = "";

    recompileColorScript();
    editor.on("change", recompileColorScript);

    function recompileColorScript() {
        var content = editor.getValue();

        if (previousContent !== content) {
            try {
                eval(content);
                // the eval'd script should contain a function called `color`.
                var colorFn = color;
                previousContent = content;
                colorModel.setColorFn(colorFn);
            } catch (e) {

            }
        }
    }
}
