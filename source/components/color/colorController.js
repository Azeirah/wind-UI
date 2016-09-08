function ColorController(colorModel, editor) {
    recompileColorScript();
    editor.on("change", recompileColorScript);

    function recompileColorScript() {
        var content = editor.getValue();

        function onSuccesfulEval() {
            editor.display.wrapper.style.border = "2px solid green";
        }

        function onFailedEval() {
            editor.display.wrapper.style.border = "2px solid red";
        }

        try {
            // the script retrieved from the editor should define a function called `color`.
            eval(content);
            // the `color` function is defined within the script
            // eval(content) brings this `color` function into the scope
            var colorFn = color;
            if (!colorFn) {
                onFailedEval();
            } else {
                // try to execute the color function, if there are any other weird errors like reference errors
                // that can only be detected during runtime, then also go to red-border failure state.
                try {
                    colorFn({speed: 10, x: 10, y: 10, lifetime: 10, origin: {x: 10, y: 10}});
                } catch (e) {
                    onFailedEval();
                }
                colorModel.setColorFn(colorFn);
                onSuccesfulEval();
            }
        } catch (e) {
            onFailedEval();
        }
    }
}
